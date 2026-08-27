const { Router } = require("express");
const indexRouter = Router();
const storeControllers = require("../controllers/storeControllers");

indexRouter.get("/", storeControllers.getAllStock);

module.exports = indexRouter;
