const express = require("express");
const router = express.Router();

const articlesHandler = require("./handler/articles");

router.post("/", articlesHandler.create);
router.get("/", articlesHandler.getAll);
router.get("/:id", articlesHandler.get);
router.put("/:id", articlesHandler.update);
router.delete("/:id", articlesHandler.destroy);

module.exports = router;
