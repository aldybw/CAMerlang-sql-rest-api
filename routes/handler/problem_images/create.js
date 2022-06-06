const isBase64 = require("is-base64");
const base64Img = require("base64-img");
const Validator = require("fastest-validator");
const v = new Validator();

const { problem_image } = require("../../../models/");

module.exports = async (req, res) => {
  const schema = {
    image: {
      type: "string",
      empty: "false",
    },
    imageDescription: {
      type: "string",
      empty: "false",
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

  if (!isBase64(image, { mimeRequired: true })) {
    return res.status(400).json({ status: "error", message: "invalid base64" });
  }

  base64Img.img(
    image,
    "./public/images/problem_images/images",
    Date.now(),
    async (err, filepath) => {
      if (err) {
        return res.status(400).json({ status: "error", message: err.message });
      }

      const filename = filepath.split("\\").pop().split("/").pop();

      const data = {
        image: `images/problem_images/images/${filename}`,
        imageDescription: req.body.imageDescription,
      };

      const createdProblemImage = await problem_image.create(data);

      return res.json({
        status: "success",
        data: {
          id: createdProblemImage.id,
          image: `${req.get("host")}/${createdProblemImage.image}`,
          image_description: createdProblemImage.imageDescription,
          created_at: createdProblemImage.createdAt,
          updated_at: createdProblemImage.updatedAt,
        },
      });
    }
  );
};
