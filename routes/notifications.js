const express = require("express");
const router = express.Router();

const notificationsHandler = require("./handler/notifications");

router.get("/", notificationsHandler.getAll);
router.get("/:id", notificationsHandler.get);
router.post("/", notificationsHandler.create);
router.put("/:id", notificationsHandler.update);
router.delete("/:id", notificationsHandler.destroy);

module.exports = router;
