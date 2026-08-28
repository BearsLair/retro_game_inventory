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
  console,
  quantity,
  price,
  developer,
  publisher,
  genre,
  releaseyear,
) {
  try {
    const results = await pool.query(
      "INSERT INTO stock (name, console, quantity, price) VALUES ($1, $2, $3, $4) RETURNING stockid;",
      [name, console, quantity, price],
    );
    const id = result.rows[0].stockID;

    await pool.query(
      "INSERT INTO game_details (Developer, Publisher, Genre, ReleaseYear, stockID) VALUES ($1, $2, $3, $4)",
      [developer, publisher, genre, releaseyear, id],
    );
    console.log("Game added to database.");
  } catch (error) {
    console.error("Error adding game details to db: ", error);
  }
}

module.exports = {
  getAllStock,
  getGameDetails,
  postGameDetails,
};
