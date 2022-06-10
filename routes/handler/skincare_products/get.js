const { SkincareProduct } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const skincareProduct = await SkincareProduct.findByPk(id, {
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

  if (!skincareProduct) {
    return res.status(404).json({
      status: "error",
      message: "skincare product not found",
    });
  }

  const specifiedSkincareProduct = {
    id: skincareProduct.id,
    image: skincareProduct.image,
    name: skincareProduct.name,
    brand: skincareProduct.brand,
    is_popular: skincareProduct.isPopular,
    created_at: skincareProduct.createdAt,
    updated_at: skincareProduct.updatedAt,
  };

  return res.json({
    status: "success",
    data: specifiedSkincareProduct,
  });
};
