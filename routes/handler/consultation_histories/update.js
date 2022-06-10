const Validator = require("fastest-validator");
const v = new Validator();

const { skincare_product } = require("../../../models/");

module.exports = async (req, res) => {
  const schema = {
    image: {
      type: "string",
      optional: true,
    },
    name: {
      type: "string",
      optional: true,
    },
    brand: {
      type: "string",
      optional: true,
    },
    isPopular: {
      type: "boolean",
      optional: true,
    },
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const id = req.params.id;
  const getSkincareProduct = await skincare_product.findByPk(id);
  if (!getSkincareProduct) {
    return res.status(404).json({
      status: "error",
      message: "skincare product not found",
    });
  }

  const { image, name, brand, isPopular } = req.body;

  const updatedSkincareProduct = await getSkincareProduct.update({
    image,
    name,
    brand,
    isPopular,
  });

  return res.json({
    status: "success",
    data: {
      id: updatedSkincareProduct.id,
      image: updatedSkincareProduct.image,
      name: updatedSkincareProduct.name,
      brand: updatedSkincareProduct.brand,
      is_popular: updatedSkincareProduct.isPopular,
      created_at: updatedSkincareProduct.createdAt,
      updated_at: updatedSkincareProduct.updatedAt,
    },
  });
};
