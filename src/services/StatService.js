import database from './../models';

class StatService {
  static async getAllStats() {
    try {
      return await database.Rankme.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getAllPlayers(limit, offset) {
    try {
      return await database.Rankme.findAll({
        attributes: [
          'id',
          'steam',
          'name',
          'score',
          'kills',
          'deaths',
          'connected'
        ],
        order: [['score', 'DESC']],
        offset,
        limit
      });
    } catch (error) {
      throw error;
    }
  }

  static async getAStat(id) {
    try {
      const theStat = await database.Rankme.findOne({
        where: { id: Number(id) }
      });

      return theStat;
    } catch (error) {
      throw error;
    }
  }

  static async count() {
    try {
      return await database.Rankme.count();
    } catch (error) {
      throw error;
    }
  }
}

export default StatService;
