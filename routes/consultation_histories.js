const express = require("express");
const router = express.Router();

const consultationHistoriesHandler = require("./handler/consultation_histories");

router.get("/", consultationHistoriesHandler.getAll);
router.get("/:id", consultationHistoriesHandler.get);
router.post("/", consultationHistoriesHandler.create);
router.put("/:id", consultationHistoriesHandler.update);
router.delete("/:id", consultationHistoriesHandler.destroy);

module.exports = router;
