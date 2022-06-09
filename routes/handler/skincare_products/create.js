const Validator = require("fastest-validator");
const v = new Validator();

const { skincare_product } = require("../../../models/");

module.exports = async (req, res) => {
  const schema = {
    image: {
      type: "string",
      empty: "false",
    },
    name: {
      type: "string",
      empty: "false",
    },
    brand: {
      type: "string",
      empty: "false",
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

  const data = {
    image: req.body.image,
    name: req.body.name,
    brand: req.body.brand,
    isPopular: req.body.isPopular,
  };

  const createdSkincareProducts = await skincare_product.create(data);

  return res.json({
    status: "success",
    data: {
      id: createdSkincareProducts.id,
      image: createdSkincareProducts.image,
      name: createdSkincareProducts.name,
      brand: createdSkincareProducts.brand,
      is_popular: createdSkincareProducts.isPopular,
      created_at: createdSkincareProducts.createdAt,
      updated_at: createdSkincareProducts.updatedAt,
    },
  });
};
