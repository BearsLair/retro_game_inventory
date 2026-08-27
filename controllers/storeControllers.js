async function getAllStock(req, res) {
  try {
    res.render("index");
  } catch (err) {
    console.error("Error retrieving index page: ", err);
  }
}

module.exports = {
  getAllStock,
};
