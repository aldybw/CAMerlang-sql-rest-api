const Validator = require("fastest-validator");
const v = new Validator();

const { SkincareProduct } = require("../../../models/");

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

  const createdSkincareProduct = await SkincareProduct.create(data);

  return res.json({
    status: "success",
    data: {
      id: createdSkincareProduct.id,
      image: createdSkincareProduct.image,
      name: createdSkincareProduct.name,
      brand: createdSkincareProduct.brand,
      is_popular: createdSkincareProduct.isPopular,
      created_at: createdSkincareProduct.createdAt,
      updated_at: createdSkincareProduct.updatedAt,
    },
  });
};
