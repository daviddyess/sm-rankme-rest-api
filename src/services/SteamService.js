import steamid from 'steamid';

class SteamService {
  static async getSteamId(id) {
    try {
      const sid = new steamid(id);
      const steam = {
        ...sid,
        steam2Id: id,
        steam3Id: sid.getSteam3RenderedID(),
        steamId: sid.getSteamID64()
      };
      return steam;
    } catch (error) {
      throw error;
    }
  }
}

export default SteamService;
