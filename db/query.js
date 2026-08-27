const pool = require("./pool");

async function getAllStock() {
  try {
    const { rows } = await pool.query("SELECT * FROM stock");
    return rows;
  } catch (error) {
    console.error("db retrieval error: ", error);
  }
}

module.exports = {
  getAllStock,
};
