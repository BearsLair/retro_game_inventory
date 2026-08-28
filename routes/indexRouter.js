const { Router } = require("express");
const indexRouter = Router();
const storeControllers = require("../controllers/storeControllers");

// All games
indexRouter.get("/", storeControllers.getAllStock);

// Individual game information
indexRouter.get("/details/:stockID", storeControllers.getGameDetails);

// Note: not exporting leads to TypeError (handler function needed)
module.exports = indexRouter;
