const isBase64 = require("is-base64");
const base64Img = require("base64-img");
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

  const image = req.body.image;
  const brand = req.body.brand;

  if (!isBase64(image, { mimeRequired: true })) {
    return res.status(400).json({ status: "error", message: "invalid base64" });
  }

  if (!isBase64(brand, { mimeRequired: true })) {
    return res.status(400).json({ status: "error", message: "invalid base64" });
  }

  base64Img.img(
    image,
    "./public/images/skincare_products/images",
    Date.now(),
    async (err, filepath) => {
      if (err) {
        return res.status(400).json({ status: "error", message: err.message });
      }

      const imageFilename = filepath.split("\\").pop().split("/").pop();

      base64Img.img(
        brand,
        "./public/images/skincare_products/brands",
        Date.now(),
        async (err, filepath) => {
          if (err) {
            return res
              .status(400)
              .json({ status: "error", message: err.message });
          }

          const brandFilename = filepath.split("\\").pop().split("/").pop();

          const data = {
            image: `images/skincare_products/images/${imageFilename}`,
            name: req.body.name,
            brand: `images/skincare_products/brands/${brandFilename}`,
            isPopular: req.body.isPopular,
          };

          const createdSkincareProducts = await skincare_product.create(data);

          return res.json({
            status: "success",
            data: {
              id: createdSkincareProducts.id,
              image: `${req.get("host")}/${createdSkincareProducts.image}`,
              name: createdSkincareProducts.name,
              brand: `${req.get("host")}/${createdSkincareProducts.brand}`,
              isPopular: createdSkincareProducts.isPopular,
              created_at: createdSkincareProducts.createdAt,
              updated_at: createdSkincareProducts.updatedAt,
            },
          });
        }
      );
    }
  );
};
