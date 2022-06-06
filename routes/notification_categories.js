const express = require("express");
const router = express.Router();

const notificationCategoriesHandler = require("./handler/notification_categories");

router.get("/", notificationCategoriesHandler.getAll);
router.get("/:id", notificationCategoriesHandler.get);
router.post("/", notificationCategoriesHandler.create);
router.put("/:id", notificationCategoriesHandler.update);
router.delete("/:id", notificationCategoriesHandler.destroy);

module.exports = router;
