const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ogn_id = request.headers.authorization;
    const incidents = await connection('incidents')
      .where('ong_id', ogn_id)
      .select('*');
    return response.json(incidents);
  }
}