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

async function postGameDetails(
  name,
  system,
  quantity,
  price,
  developer,
  publisher,
  genre,
  releaseyear,
) {
  try {
    const result = await pool.query(
      `INSERT INTO stock (name, console, quantity, price) VALUES ($1, $2, $3, $4) RETURNING stockid;`,
      [name, system, quantity, price],
    );

    console.log("result returned from query: ", result);
    const id = result.rows[0].stockid;
    console.log("id returned: ", id);

    await pool.query(
      "INSERT INTO game_details (Developer, Publisher, Genre, ReleaseYear, stockID) VALUES ($1, $2, $3, $4, $5);",
      [developer, publisher, genre, releaseyear, id],
    );
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllStock,
  getGameDetails,
  postGameDetails,
};
