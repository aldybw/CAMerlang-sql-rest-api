require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
// const timeout = require("connect-timeout");

const indexRouter = require("./routes/index");
const articlesRouter = require("./routes/articles");
const librariesRouter = require("./routes/libraries");

const app = express();

// app.use(timeout("12s"));
app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/articles", articlesRouter);
app.use("/libraries", librariesRouter);

module.exports = app;
