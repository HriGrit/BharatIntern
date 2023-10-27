const express = require("express");

const {
	postAllCtrl,
	postCreateCtrl,
	postDeleteCtrl,
	postSingleCtrl,
	postUpdateCtrl,
} = require("../controllers/postsctrl");

const postsRouter = express.Router();

postsRouter.post("/create", postCreateCtrl);

postsRouter.get("/all", postAllCtrl);

postsRouter.get("/single/:id", postSingleCtrl);

postsRouter.put("/update/:id", postUpdateCtrl);

postsRouter.delete("/delete/:id", postDeleteCtrl);

module.exports = postsRouter;
