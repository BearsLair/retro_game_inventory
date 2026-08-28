const pool = require("./pool");

async function getAllStock() {
  try {
    const { rows } = await pool.query("SELECT * FROM stock");
    return rows;
  } catch (error) {
    console.error("db retrieval error: ", error);
  }
}

async function getGameDetails(stockID) {
  try {
    // Note: The key is "rows" (plural), NOT singular "row"
    const { rows } = await pool.query(
      "SELECT * FROM stock INNER JOIN game_details ON stock.stockid = game_details.stockid WHERE stock.stockid = $1",
      [stockID],
    );
    return rows;
  } catch (error) {
    console.error("Error getting game details: ", error);
  }
}

module.exports = {
  getAllStock,
  getGameDetails,
};
