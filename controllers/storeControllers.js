const db = require("../db/query");
const { validationResult } = require("express-validator");

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

async function getFilters(req, res) {
  try {
    const filters = await db.getFilterCategories();
    res.render("filter", { filters: filters });
  } catch (error) {
    console.error(error);
  }
}

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

async function getGameForm(req, res) {
  try {
    res.render("form");
  } catch (error) {
    console.error("Error getting form: ", error);
  }
}

async function postGameDetails(req, res) {
  try {
    // Retrive validation errors from request
    const errors = validationResult(req);

    // Stop execution and display errors if errors found
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        errors: errors.array(), // Errors array available for iteration
        formData: req.body, // Pass data to form so user doesn't reenter information
      });
    }

    // No errors? Continue database post request
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
  } catch (error) {
    console.error("post game details error: ", error);
  }
}

// Note: not exporting leads to TypeError (handler function needed)
module.exports = {
  getAllStock,
  getGameDetails,
  getFilters,
  getSystemResults,
  getDeveloperResults,
  getPublisherResults,
  getGenreResults,
  getReleaseYearResults,
  getGameForm,
  postGameDetails,
};
