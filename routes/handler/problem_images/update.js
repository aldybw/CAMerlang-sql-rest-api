const Validator = require("fastest-validator");
const v = new Validator();

const { ProblemImage } = require("../../../models/");

module.exports = async (req, res) => {
  const schema = {
    image: {
      type: "string",
      optional: true,
    },
    type: {
      type: "string",
      optional: true,
    },
    description: {
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
  const problemImage = await ProblemImage.findByPk(id);
  if (!problemImage) {
    return res.status(404).json({
      status: "error",
      message: "problem image not found",
    });
  }

  const { image, type, description } = req.body;
  const updatedProblemImage = await problemImage.update({
    image,
    type,
    description,
  });

  return res.json({
    status: "success",
    data: {
      id: updatedProblemImage.id,
      image: updatedProblemImage.image,
      type: updatedProblemImage.type,
      description: updatedProblemImage.description,
      created_at: updatedProblemImage.createdAt,
      updated_at: updatedProblemImage.updatedAt,
    },
  });
};
