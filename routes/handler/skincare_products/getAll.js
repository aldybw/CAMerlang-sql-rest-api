const { skincare_product } = require("../../../models/");

module.exports = async (req, res) => {
  const skincareProductIds = req.query.skincareProductIds || [];
  const skincareProductNames = req.query.skincareProductNames || [];
  const skincareProductIsPopular = req.query.skincareProductIsPopular || [];

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
      title: skincareProductNames,
    };
  }
  if (skincareProductIsPopular.length) {
    sqlOptions.where = {
      type: skincareProductIsPopular,
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
      title: s.title,
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
