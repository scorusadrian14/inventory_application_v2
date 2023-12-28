const db = require("../../db");
const tableNames = require("../../constants/tableNames");

module.exports = {
  find() {
    return db(tableNames.state).select("id", "name", "code");
  },
  async findById(id) {
    const [state] = await db(tableNames.state)
      .select("id", "name", "code")
      .where({
        id,
      });
    return state;
  },
};
