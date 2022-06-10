const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifiyToken");

const expertsHandler = require("./handler/experts");

router.get("/", expertsHandler.getAll);
router.get("/:id", expertsHandler.get);
router.post("/", verifyToken, expertsHandler.create);
router.put("/:id", verifyToken, expertsHandler.update);
router.delete("/:id", verifyToken, expertsHandler.destroy);

module.exports = router;
