const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifiyToken");

const notificationCategoriesHandler = require("./handler/notification_categories");

router.get("/", notificationCategoriesHandler.getAll);
router.get("/:id", notificationCategoriesHandler.get);
router.post("/", verifyToken, notificationCategoriesHandler.create);
router.put("/:id", verifyToken, notificationCategoriesHandler.update);
router.delete("/:id", verifyToken, notificationCategoriesHandler.destroy);

module.exports = router;
