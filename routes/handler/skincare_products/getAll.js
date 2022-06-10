const { SkincareProduct } = require("../../../models/");

module.exports = async (req, res) => {
  const skincareProductIds = req.query.skincareProductIds || [];
  const skincareProductNames = req.query.skincareProductNames || [];

  const sqlOptions = {
    attributes: [
      "id",
      "image",
      "name",
      "brand",
      "isPopular",
      "createdAt",
      "updatedAt",
    ],
  };

  if (skincareProductIds.length) {
    sqlOptions.where = {
      id: skincareProductIds,
    };
  }
  if (skincareProductNames.length) {
    sqlOptions.where = {
      name: skincareProductNames,
    };
  }

  const skincareProducts = await SkincareProduct.findAll(sqlOptions);

  if (skincareProducts.length === 0) {
    return res.json({
      status: "success",
      message: "There is no skincare product data",
    });
  }

  const mappedSkincareProduct = skincareProducts.map((s) => {
    s = {
      id: s.id,
      image: s.image,
      name: s.name,
      brand: s.brand,
      is_popular: s.isPopular,
      created_at: s.createdAt,
      updated_at: s.updatedAt,
    };
    return s;
  });

  return res.json({
    status: "success",
    data: mappedSkincareProduct,
  });
};
