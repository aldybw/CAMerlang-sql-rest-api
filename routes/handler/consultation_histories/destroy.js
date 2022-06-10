const { skincare_product } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getSkincareProduct = await skincare_product.findByPk(id);

  if (!getSkincareProduct) {
    return res
      .status(404)
      .json({ status: "error", message: "skincare product not found" });
  }

  await getSkincareProduct.destroy();

  return res.json({
    status: "success",
    message: "skincare product deleted",
  });
};
