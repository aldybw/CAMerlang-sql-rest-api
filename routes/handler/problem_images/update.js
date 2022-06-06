const isBase64 = require("is-base64");
const base64Img = require("base64-img");
const fs = require("fs");
const Validator = require("fastest-validator");
const v = new Validator();

const { problem_image } = require("../../../models/");

module.exports = async (req, res) => {
  const schema = {
    image: {
      type: "string",
      optional: true,
    },
    imageDescription: {
      type: "string",
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
  const getProblemImage = await problem_image.findByPk(id);
  if (!getProblemImage) {
    return res.status(404).json({
      status: "error",
      message: "problem image not found",
    });
  }

  const image = req.body.image;

  if (!image) {
    const { imageDescription } = req.body;
    const updatedProblemImage = await getProblemImage.update({
      imageDescription,
    });
    return res.json({
      status: "success",
      data: {
        id: updatedProblemImage.id,
        image: `${req.get("host")}/${updatedProblemImage.image}`,
        image_description: updatedProblemImage.imageDescription,
        created_at: updatedProblemImage.createdAt,
        updated_at: updatedProblemImage.updatedAt,
      },
    });
  } else {
    fs.unlink(`./public/${getProblemImage.image}`, async (err) => {
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
      "./public/images/problem_images/images",
      Date.now(),
      async (err, filepath) => {
        if (err) {
          return res
            .status(400)
            .json({ status: "error", message: err.message });
        }

        const filename = filepath.split("\\").pop().split("/").pop();

        const { imageDescription } = req.body;
        const updatedProblemImage = await getProblemImage.update({
          image: `images/problem_images/images/${filename}`,
          imageDescription,
        });

        return res.json({
          status: "success",
          data: {
            id: updatedProblemImage.id,
            image: `${req.get("host")}/${updatedProblemImage.image}`,
            image_description: updatedProblemImage.imageDescription,
            created_at: updatedProblemImage.createdAt,
            updated_at: updatedProblemImage.updatedAt,
          },
        });
      }
    );
  }
};
