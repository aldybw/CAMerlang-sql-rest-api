const isBase64 = require("is-base64");
const base64Img = require("base64-img");
const fs = require("fs");
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

  const image = req.body.image;
  const brand = req.body.brand;

  if (!image && !brand) {
    const { name, isPopular } = req.body;
    const updatedSkincareProduct = await getSkincareProduct.update({
      name,
      isPopular,
    });
    return res.json({
      status: "success",
      data: {
        id: updatedSkincareProduct.id,
        image: `${req.get("host")}/${updatedSkincareProduct.image}`,
        name: updatedSkincareProduct.name,
        brand: `${req.get("host")}/${updatedSkincareProduct.brand}`,
        is_popular: updatedSkincareProduct.isPopular,
        created_at: updatedSkincareProduct.createdAt,
        updated_at: updatedSkincareProduct.updatedAt,
      },
    });
  } else if (image && brand) {
    fs.unlink(`./public/${getSkincareProduct.image}`, async (err) => {
      if (err) {
        return res.status(400).json({ status: "error", message: err.message });
      }
    });

    fs.unlink(`./public/${getSkincareProduct.brand}`, async (err) => {
      if (err) {
        return res.status(400).json({ status: "error", message: err.message });
      }
    });

    if (!isBase64(image, { mimeRequired: true })) {
      return res
        .status(400)
        .json({ status: "error", message: "invalid base64" });
    }

    if (!isBase64(brand, { mimeRequired: true })) {
      return res
        .status(400)
        .json({ status: "error", message: "invalid base64" });
    }

    base64Img.img(
      image,
      "./public/images/skincare_products/images",
      Date.now(),
      async (err, filepath) => {
        if (err) {
          return res
            .status(400)
            .json({ status: "error", message: err.message });
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

            const { name, isPopular } = req.body;

            const updatedSkincareProduct = await getSkincareProduct.update({
              image: `images/skincare_products/images/${imageFilename}`,
              name,
              brand: `images/skincare_products/brands/${brandFilename}`,
              isPopular,
            });

            return res.json({
              status: "success",
              data: {
                id: updatedSkincareProduct.id,
                image: `${req.get("host")}/${updatedSkincareProduct.image}`,
                name: updatedSkincareProduct.name,
                brand: `${req.get("host")}/${updatedSkincareProduct.brand}`,
                is_popular: updatedSkincareProduct.isPopular,
                created_at: updatedSkincareProduct.createdAt,
                updated_at: updatedSkincareProduct.updatedAt,
              },
            });
          }
        );
      }
    );
  } else if (image) {
    fs.unlink(`./public/${getSkincareProduct.image}`, async (err) => {
      if (err) {
        return res.status(400).json({ status: "error", message: err.message });
      }
    });

    if (!isBase64(image, { mimeRequired: true })) {
      return res
        .status(400)
        .json({ status: "error", message: "invalid base64" });
    }

    base64Img.img(
      image,
      "./public/images/skincare_products/images",
      Date.now(),
      async (err, filepath) => {
        if (err) {
          return res
            .status(400)
            .json({ status: "error", message: err.message });
        }

        const filename = filepath.split("\\").pop().split("/").pop();

        const { name, isPopular } = req.body;
        const updatedSkincareProduct = await getSkincareProduct.update({
          image: `images/skincare_products/images/${filename}`,
          name,
          isPopular,
        });

        return res.json({
          status: "success",
          data: {
            id: updatedSkincareProduct.id,
            image: `${req.get("host")}/${updatedSkincareProduct.image}`,
            name: updatedSkincareProduct.name,
            brand: `${req.get("host")}/${updatedSkincareProduct.brand}`,
            is_popular: updatedSkincareProduct.isPopular,
            created_at: updatedSkincareProduct.createdAt,
            updated_at: updatedSkincareProduct.updatedAt,
          },
        });
      }
    );
  } else if (brand) {
    fs.unlink(`./public/${getSkincareProduct.brand}`, async (err) => {
      if (err) {
        return res.status(400).json({ status: "error", message: err.message });
      }
    });

    if (!isBase64(brand, { mimeRequired: true })) {
      return res
        .status(400)
        .json({ status: "error", message: "invalid base64" });
    }

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

        const filename = filepath.split("\\").pop().split("/").pop();

        const { name, isPopular } = req.body;
        const updatedSkincareProduct = await getSkincareProduct.update({
          brand: `images/skincare_products/brands/${filename}`,
          name,
          isPopular,
        });

        return res.json({
          status: "success",
          data: {
            id: updatedSkincareProduct.id,
            image: `${req.get("host")}/${updatedSkincareProduct.image}`,
            name: updatedSkincareProduct.name,
            brand: `${req.get("host")}/${updatedSkincareProduct.brand}`,
            is_popular: updatedSkincareProduct.isPopular,
            created_at: updatedSkincareProduct.createdAt,
            updated_at: updatedSkincareProduct.updatedAt,
          },
        });
      }
    );
  }
};
