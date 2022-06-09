const express = require("express");
const router = express.Router();

const expertsHandler = require("./handler/experts");

router.get("/", expertsHandler.getAll);
router.get("/:id", expertsHandler.get);
router.post("/", expertsHandler.create);
router.put("/:id", expertsHandler.update);
router.delete("/:id", expertsHandler.destroy);

module.exports = router;
