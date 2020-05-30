import steam from 'steam-web';
import steamid from 'steamid';
import StatService from './../services/StatService';
import Util from './../utils/Utils';
import config from '../config';

const util = new Util();

class StatController {
  static async getAllStats(req, res) {
    try {
      const allStats = await StatService.getAllStats();
      if (allStats.length > 0) {
        util.setSuccess(200, 'Stats retrieved', allStats);
      } else {
        util.setSuccess(200, 'No Stats found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async countAllPlayers(req, res) {
    try {
      const allStats = await StatService.count();

      util.setSuccess(200, 'Stats retrieved', allStats);

      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getAllPlayers(req, res) {
    try {
      let { count, page } = req.query;

      if (!count || Number(count) > 20) {
        count = 20;
      } else {
        count = Number(count);
      }
      if (!page) {
        page = 1;
      } else {
        page = Number(page);
      }
      const allStats = await StatService.getAllPlayers(
        count,
        (page - 1) * count
      );

      if (allStats.length > 0) {
        util.setSuccess(200, 'Stats retrieved', allStats);
      } else {
        util.setSuccess(200, 'No Stat found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getAStat(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theStat = await StatService.getAStat(id);

      if (!theStat) {
        util.setError(404, `Cannot find Stat with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Stat', theStat);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAPlayer(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const s = new steam({
        apiKey: config.steamAPIKey,
        format: 'json' //optional ['json', 'xml', 'vdf']
      });

      const theStat = await StatService.getAStat(id);
      if (!theStat) {
        util.setError(404, `Cannot find Stat with the id ${id}`);
      } else {
        const sid = new steamid(theStat.steam);
        s.getPlayerSummaries({
          steamids: [sid.getSteamID64()],
          callback: function (err, data) {
            util.setSuccess(200, 'Stats retrieved', {
              steam: data.response.players[0],
              stats: theStat
            });
            return util.send(res);
          }
        });
      }
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
}

export default StatController;
