const Validator = require("fastest-validator");
const v = new Validator();

const { Expert } = require("../../../models/");

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
    specialization: {
      type: "string",
      empty: "false",
    },
    score: {
      type: "number",
      empty: "false",
    },
    status: {
      type: "enum",
      values: ["verified", "unverified"],
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
    name: req.body.name,
    specialization: req.body.specialization,
    score: req.body.score,
    status: req.body.status,
  };

  const createdExpert = await Expert.create(data);

  return res.json({
    status: "success",
    data: {
      id: createdExpert.id,
      image: createdExpert.image,
      name: createdExpert.name,
      specialization: createdExpert.specialization,
      score: createdExpert.score,
      status: createdExpert.status,
      created_at: createdExpert.createdAt,
      updated_at: createdExpert.updatedAt,
    },
  });
};
