const bcrypt = require("bcrypt");
const { User } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    name: {
      type: "string",
      optional: true,
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
      optional: true,
    },
    email: {
      type: "email",
      optional: true,
    },
    password: {
      type: "string",
      min: 8,
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
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "user not found",
    });
  }

  const email = req.body.email;
  if (email) {
    const checkEmail = await User.findOne({
      where: { email },
    });

    if (checkEmail && email !== user.email) {
      return res.status(409).json({
        status: "error",
        message: "email already exist",
      });
    }
  }

  const password = await bcrypt.hash(req.body.password, 10);
  const { name, age, profession, currentStatus, role } = req.body;

  const updatedUser = await user.update({
    name,
    age,
    profession,
    currentStatus,
    role,
    email,
    password,
  });

  return res.json({
    status: "success",
    data: {
      id: updatedUser.id,
      name: updatedUser.name,
      age: updatedUser.age,
      profession: updatedUser.profession,
      current_status: updatedUser.currentStatus,
      role: updatedUser.role,
      email: updatedUser.email,
    },
  });
};
