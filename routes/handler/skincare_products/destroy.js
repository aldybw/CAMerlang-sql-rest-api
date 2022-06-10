const { SkincareProduct } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const skincareProduct = await SkincareProduct.findByPk(id);

  if (!skincareProduct) {
    return res
      .status(404)
      .json({ status: "error", message: "skincare product not found" });
  }

  await skincareProduct.destroy();

  return res.json({
    status: "success",
    message: "skincare product deleted",
  });
};
