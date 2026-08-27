const db = require("../db/query");

async function getAllStock(req, res) {
  try {
    const stock = await db.getAllStock();
    console.log(stock);
    res.render("index", { stock: stock });
  } catch (err) {
    console.error("Error retrieving index page: ", err);
  }
}

// Note: not exporting leads to TypeError (handler function needed)
module.exports = {
  getAllStock,
};
