require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const articlesRouter = require("./routes/articles");
const librariesRouter = require("./routes/libraries");
const skincareProductsRouter = require("./routes/skincare_products");
const problemImagesRouter = require("./routes/problem_images");
const notificationCategoriesRouter = require("./routes/notification_categories");
const notificationsRouter = require("./routes/notifications");
const expertsRouter = require("./routes/experts");
const consultationHistoriesRouter = require("./routes/consultation_histories");
const usersRouter = require("./routes/users");
const refreshTokensRouter = require("./routes/refresh_tokens");

const app = express();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/articles", articlesRouter);
app.use("/libraries", librariesRouter);
app.use("/skincare_products", skincareProductsRouter);
app.use("/problem_images", problemImagesRouter);
app.use("/notification_categories", notificationCategoriesRouter);
app.use("/notifications", notificationsRouter);
app.use("/experts", expertsRouter);
app.use("/consultation_histories", consultationHistoriesRouter);
app.use("/users", usersRouter);
app.use("/refresh_tokens", refreshTokensRouter);

// Swagger API
const swaggerUi = require("swagger-ui-express");
const apiDocs = require("./apidocs.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs));
// End Swagger

module.exports = app;
