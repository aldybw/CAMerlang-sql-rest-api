const { skincare_product } = require("../../../models/");

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

  const getAllSkincareProducts = await skincare_product.findAll(sqlOptions);

  if (getAllSkincareProducts.length === 0) {
    return res.json({
      status: "success",
      message: "There is no skincare products data",
    });
  }

  const mappedSkincareProduct = getAllSkincareProducts.map((s) => {
    s = {
      id: s.id,
      image: `${req.get("host")}/${s.image}`,
      name: s.name,
      brand: `${req.get("host")}/${s.brand}`,
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
