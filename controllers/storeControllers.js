const db = require("../db/query");

async function getAllStock(req, res) {
  try {
    const stock = await db.getAllStock();
    res.render("index", { stock: stock });
  } catch (err) {
    console.error("Error retrieving index page: ", err);
  }
}

async function getGameDetails(req, res) {
  try {
    // Note: The parameter is destructured from req.params
    const { stockID } = req.params;
    const details = await db.getGameDetails(stockID);
    res.render("details", { details: details[0] });
  } catch (error) {
    console.error(error);
  }
}

async function postGameDetails(req, res) {
  const {
    name,
    console,
    quantity,
    price,
    developer,
    publisher,
    genre,
    releaseyear,
  } = req.body;

  db.postGameDetails(
    name,
    console,
    quantity,
    price,
    developer,
    publisher,
    genre,
    releaseyear,
  );
  res.redirect("/");
}

// Note: not exporting leads to TypeError (handler function needed)
module.exports = {
  getAllStock,
  getGameDetails,
  postGameDetails,
};
