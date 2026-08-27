const { Router } = require("express");
const indexRouter = Router();
const storeControllers = require("../controllers/storeControllers");

indexRouter.get("/", storeControllers.getAllStock);

// Note: not exporting leads to TypeError (handler function needed)
module.exports = indexRouter;
