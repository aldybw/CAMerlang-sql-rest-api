const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifiyToken");

const articlesHandler = require("./handler/articles");

router.get("/", articlesHandler.getAll);
router.get("/:id", articlesHandler.get);
router.post("/", verifyToken, articlesHandler.create);
router.put("/:id", verifyToken, articlesHandler.update);
router.delete("/:id", verifyToken, articlesHandler.destroy);

module.exports = router;
