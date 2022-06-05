const { skincare_product } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getSkincareProduct = await skincare_product.findByPk(id, {
    attributes: [
      "id",
      "image",
      "name",
      "brand",
      "isPopular",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!getSkincareProduct) {
    return res.status(404).json({
      status: "error",
      message: "skincare product not found",
    });
  }

  const specifiedSkincareProduct = {
    id: getSkincareProduct.id,
    image: `${req.get("host")}/${getSkincareProduct.image}`,
    name: getSkincareProduct.name,
    brand: `${req.get("host")}/${getSkincareProduct.brand}`,
    is_popular: getSkincareProduct.isPopular,
    created_at: getSkincareProduct.createdAt,
    updated_at: getSkincareProduct.updatedAt,
  };

  return res.json({
    status: "success",
    data: specifiedSkincareProduct,
  });
};
