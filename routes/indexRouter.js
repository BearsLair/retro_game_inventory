const { Router } = require("express");
const indexRouter = Router();
const storeControllers = require("../controllers/storeControllers");

// All games
indexRouter.get("/", storeControllers.getAllStock);

// Individual game information
indexRouter.get("/details/:stockID", storeControllers.getGameDetails);

// TODO: Filter by system, developer, publisher, genre
indexRouter.get("/filter", storeControllers.getFilters);

// Retrieve game details input form
indexRouter.get("/form", storeControllers.getGameForm);

indexRouter.post("/form", storeControllers.postGameDetails);

// Note: not exporting leads to TypeError (handler function needed)
module.exports = indexRouter;
