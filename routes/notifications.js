const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifiyToken");

const notificationsHandler = require("./handler/notifications");

router.get("/", notificationsHandler.getAll);
router.get("/:id", notificationsHandler.get);
router.post("/", verifyToken, notificationsHandler.create);
router.put("/:id", verifyToken, notificationsHandler.update);
router.delete("/:id", verifyToken, notificationsHandler.destroy);

module.exports = router;
