const Validator = require("fastest-validator");
const v = new Validator();

const { Expert } = require("../../../models/");

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
    specialization: {
      type: "string",
      optional: true,
    },
    score: {
      type: "number",
      optional: true,
    },
    status: {
      type: "enum",
      values: ["verified", "unverified"],
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
  const expert = await Expert.findByPk(id);
  if (!expert) {
    return res.status(404).json({
      status: "error",
      message: "expert not found",
    });
  }

  const { image, name, specialization, score, status } = req.body;

  const updatedExpert = await expert.update({
    image,
    name,
    specialization,
    score,
    status,
  });

  return res.json({
    status: "success",
    data: {
      id: updatedExpert.id,
      image: updatedExpert.image,
      name: updatedExpert.name,
      specialization: updatedExpert.specialization,
      score: updatedExpert.score,
      status: updatedExpert.status,
      created_at: updatedExpert.createdAt,
      updated_at: updatedExpert.updatedAt,
    },
  });
};
