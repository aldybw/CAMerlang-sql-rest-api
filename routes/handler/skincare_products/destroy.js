const fs = require("fs");
const { skincare_product } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getSkincareProduct = await skincare_product.findByPk(id);

  if (!getSkincareProduct) {
    return res
      .status(404)
      .json({ status: "error", message: "skincare product not found" });
  }

  fs.unlink(`./public/${getSkincareProduct.image}`, async (err) => {
    if (err) {
      return res.status(400).json({ status: "error", message: err.message });
    }

    fs.unlink(`./public/${getSkincareProduct.brand}`, async (err) => {
      if (err) {
        return res.status(400).json({ status: "error", message: err.message });
      }

      await getSkincareProduct.destroy();

      return res.json({
        status: "success",
        message: "skincare product deleted",
      });
    });
  });
};
