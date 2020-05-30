import steam from 'steam-web';
import steamid from 'steamid';
import Util from './../utils/Utils';
import config from '../config';

const util = new Util();

const s = new steam({
  apiKey: config.steamAPIKey,
  format: 'json' //optional ['json', 'xml', 'vdf']
});

class SteamController {
  static async getPlayerSteamID(req, res) {
    const { steam2id } = req.query;
    var sid = new steamid(steam2id);
    const steam = {
      ...sid,
      steam2Id: steam2id,
      steam3Id: sid.getSteam3RenderedID(),
      steamId: sid.getSteamID64()
    };
    try {
      util.setSuccess(200, 'Stats retrieved', steam);
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getPlayerSummary(req, res) {
    const { steam2id } = req.query;
    var sid = new steamid(steam2id);
    try {
      s.getPlayerSummaries({
        steamids: [sid.getSteamID64()],
        callback: function (err, data) {
          util.setSuccess(200, 'Stats retrieved', data);
          return util.send(res);
        }
      });
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default SteamController;
