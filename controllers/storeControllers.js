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

<<<<<<< HEAD
// Get filtered games form
async function getFilteredForm(req, res) {
  try {
    res.render("filter");
=======
async function getFilters(req, res) {
  try {
    const filters = await db.getFilterCategories();
    res.render("filter", { filters: filters });
>>>>>>> FilteredGames
  } catch (error) {
    console.error(error);
  }
}

<<<<<<< HEAD
async function getFilteredResults(req, res) {
  try {
    console.log(req.query);
    const results = await db.getFilteredGames(req.query);
    console.log("filtered results returned to controller: ", results);

    res.render("results");
  } catch (error) {
    console.error(error);
  }
}

=======
// --------------------------------

async function getSystemResults(req, res) {
  try {
    const filteredGames = await db.getSystemResults(req.params.system);

    res.render("filterResults", {
      filteredGames: filteredGames,
    });
  } catch (error) {
    console.error("Error retrieving results", error);
  }
}

async function getDeveloperResults(req, res) {
  try {
    const filteredGames = await db.getDeveloperResults(req.params.developer);

    res.render("filterResults", { filteredGames: filteredGames });
  } catch (error) {
    console.error("Error retrieving results", error);
  }
}

async function getPublisherResults(req, res) {
  try {
    const filteredGames = await db.getPublisherResults(req.params.publisher);

    res.render("filterResults", { filteredGames: filteredGames });
  } catch (error) {
    console.error("Error retrieving results", error);
  }
}

async function getGenreResults(req, res) {
  try {
    const filteredGames = await db.getGenreResults(req.params.genre);

    res.render("filterResults", { filteredGames: filteredGames });
  } catch (error) {
    console.error("Error retrieving results", error);
  }
}

async function getReleaseYearResults(req, res) {
  try {
    const filteredGames = await db.getReleaseYearResults(
      req.params.releaseyear,
    );
    res.render("filterResults", { filteredGames: filteredGames });
  } catch (error) {
    console.error("Error retrieving results", error);
  }
}

// ---------------------------------------

>>>>>>> FilteredGames
async function getGameForm(req, res) {
  try {
    res.render("form");
  } catch (error) {
    console.error("Error getting form: ", error);
  }
}

async function postGameDetails(req, res) {
  const {
    name,
    system,
    quantity,
    price,
    developer,
    publisher,
    genre,
    releaseyear,
  } = req.body;

  db.postGameDetails(
    name,
    system,
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
<<<<<<< HEAD
  getFilteredForm,
  getFilteredResults,
=======
  getFilters,
  getSystemResults,
  getDeveloperResults,
  getPublisherResults,
  getGenreResults,
  getReleaseYearResults,
>>>>>>> FilteredGames
  getGameForm,
  postGameDetails,
};
