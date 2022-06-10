const bcrypt = require("bcrypt");
const Validator = require("fastest-validator");
const v = new Validator();

const { User } = require("../../../models");

module.exports = async (req, res) => {
  const schema = {
    name: {
      type: "string",
      empty: "false",
    },
    age: {
      type: "number",
      optional: true,
    },
    profession: {
      type: "string",
      optional: true,
    },
    currentStatus: {
      type: "string",
      optional: true,
    },
    role: {
      type: "enum",
      values: ["admin", "user"],
      empty: "false",
    },
    email: {
      type: "email",
      empty: "false",
    },
    password: {
      type: "string",
      min: 8,
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

  const user = await User.findOne({
    where: { email: req.body.email },
  });

  if (user) {
    return res.status(409).json({
      status: "error",
      message: "email already exist",
    });
  }

  const password = await bcrypt.hash(req.body.password, 10);

  const data = {
    name: req.body.name,
    age: req.body.age,
    profession: req.body.profession,
    currentStatus: req.body.currentStatus,
    role: req.body.role,
    email: req.body.email,
    password,
  };

  const createdUser = await User.create(data);

  return res.json({
    status: "success",
    data: {
      id: createdUser.id,
      name: createdUser.name,
      age: createdUser.age,
      profession: createdUser.profession,
      current_status: createdUser.currentStatus,
      role: createdUser.role,
      email: createdUser.email,
      password: createdUser.password,
      created_at: createdUser.createdAt,
      updated_at: createdUser.updatedAt,
    },
  });
};
