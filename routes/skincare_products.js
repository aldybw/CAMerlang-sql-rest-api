const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifiyToken");

const skincareProductsHandler = require("./handler/skincare_products");

router.get("/", skincareProductsHandler.getAll);
router.get("/:id", skincareProductsHandler.get);
router.post("/", verifyToken, skincareProductsHandler.create);
router.put("/:id", verifyToken, skincareProductsHandler.update);
router.delete("/:id", verifyToken, skincareProductsHandler.destroy);

module.exports = router;
