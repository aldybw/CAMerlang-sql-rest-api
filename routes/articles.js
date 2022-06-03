const express = require("express");
const router = express.Router();

const articlesHandler = require("./handler/articles");

router.get("/", articlesHandler.getAll);
router.get("/:id", articlesHandler.get);
router.get("/:id/images", articlesHandler.get);
router.get("/:id/products", articlesHandler.get);
router.get("/:id/recommendation_problem", articlesHandler.get);
router.post("/", articlesHandler.create);
router.put("/:id", articlesHandler.update);
router.delete("/:id", articlesHandler.destroy);

module.exports = router;
