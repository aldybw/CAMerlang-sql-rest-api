const express = require("express");
const router = express.Router();

const skincareProductsHandler = require("./handler/skincare_products");

router.get("/", skincareProductsHandler.getAll);
router.get("/:id", skincareProductsHandler.get);
router.post("/", skincareProductsHandler.create);
router.put("/:id", skincareProductsHandler.update);
router.delete("/:id", skincareProductsHandler.destroy);

module.exports = router;
