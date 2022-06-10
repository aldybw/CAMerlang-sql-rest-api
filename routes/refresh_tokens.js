const express = require("express");
const router = express.Router();

const refreshTokensHandler = require("./handler/refresh_tokens");

router.get("/", refreshTokensHandler.get);
router.post("/", refreshTokensHandler.create);

module.exports = router;
