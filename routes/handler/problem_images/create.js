const Validator = require("fastest-validator");
const v = new Validator();

const { problem_image } = require("../../../models/");

module.exports = async (req, res) => {
  const schema = {
    image: {
      type: "string",
      empty: "false",
    },
    description: {
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

  const data = {
    image: req.body.image,
    description: req.body.description,
  };

  const createdProblemImage = await problem_image.create(data);

  return res.json({
    status: "success",
    data: {
      id: createdProblemImage.id,
      image: createdProblemImage.image,
      description: createdProblemImage.description,
      created_at: createdProblemImage.createdAt,
      updated_at: createdProblemImage.updatedAt,
    },
  });
};
