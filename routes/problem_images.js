const express = require("express");
const router = express.Router();

const problemImagesHandler = require("./handler/problem_images");

router.get("/", problemImagesHandler.getAll);
router.get("/:id", problemImagesHandler.get);
router.post("/", problemImagesHandler.create);
router.put("/:id", problemImagesHandler.update);
router.delete("/:id", problemImagesHandler.destroy);

module.exports = router;
