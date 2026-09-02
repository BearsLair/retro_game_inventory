const { Router } = require("express");
const indexRouter = Router();
const storeControllers = require("../controllers/storeControllers");

// All games
indexRouter.get("/", storeControllers.getAllStock);

// Individual game information
indexRouter.get("/details/:stockID", storeControllers.getGameDetails);

// Filters by system, developer, publisher, genre
indexRouter.get("/filter", storeControllers.getFilters);

// Get games by console type
indexRouter.get("/filter/system/:system", storeControllers.getSystemResults);

// Get games by developer
indexRouter.get(
  "/filter/developer/:developer",
  storeControllers.getDeveloperResults,
);

// Get games by publisher
indexRouter.get(
  "/filter/publisher/:publisher",
  storeControllers.getPublisherResults,
);

// Get games by genre
indexRouter.get("/filter/genre/:genre", storeControllers.getGenreResults);

// Get games by year
indexRouter.get(
  "/filter/releaseyear/:releaseyear",
  storeControllers.getReleaseYearResults,
);

// Retrieve game details input form
indexRouter.get("/form", storeControllers.getGameForm);

// Post game details to server
indexRouter.post("/form", storeControllers.postGameDetails);

// Note: not exporting leads to TypeError (handler function needed)
module.exports = indexRouter;
