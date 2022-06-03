const express = require("express");
const router = express.Router();

const librariesHandler = require("./handler/libraries");

router.get("/", librariesHandler.getAll);
router.get("/:id", librariesHandler.get);
router.post("/", librariesHandler.create);
router.put("/:id", librariesHandler.update);
router.delete("/:id", librariesHandler.destroy);

module.exports = router;
