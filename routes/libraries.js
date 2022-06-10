const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifiyToken");

const librariesHandler = require("./handler/libraries");

router.get("/", librariesHandler.getAll);
router.get("/:id", librariesHandler.get);
router.post("/", verifyToken, librariesHandler.create);
router.put("/:id", verifyToken, librariesHandler.update);
router.delete("/:id", verifyToken, librariesHandler.destroy);

module.exports = router;
