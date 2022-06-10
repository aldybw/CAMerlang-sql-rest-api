const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifiyToken");

const problemImagesHandler = require("./handler/problem_images");

router.get("/", problemImagesHandler.getAll);
router.get("/:id", problemImagesHandler.get);
router.post("/", verifyToken, problemImagesHandler.create);
router.put("/:id", verifyToken, problemImagesHandler.update);
router.delete("/:id", verifyToken, problemImagesHandler.destroy);

module.exports = router;
