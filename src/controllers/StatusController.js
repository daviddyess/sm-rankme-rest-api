import Gamedig from 'gamedig';
import Util from './../utils/Utils';

const util = new Util();

class StatusController {
  static async getServerStatus(req, res) {
    const { host, type } = req.query;
    Gamedig.query({
      type,
      host
    })
      .then((state) => {
        util.setSuccess(200, 'Stats retrieved', state);
        return util.send(res);
      })
      .catch((error) => {
        console.log('Game Server is offline');
        util.setError(400, error);
        return util.send(res);
      });
  }
}

export default StatusController;
