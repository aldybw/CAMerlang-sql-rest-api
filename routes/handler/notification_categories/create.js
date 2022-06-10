const Validator = require("fastest-validator");
const v = new Validator();

const { NotificationCategory } = require("../../../models/");

module.exports = async (req, res) => {
  const schema = {
    name: {
      type: "enum",
      values: ["general", "tips", "reminder"],
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
    name: req.body.name,
    description: req.body.description,
  };

  const createdNotificationCategory = await NotificationCategory.create(data);

  return res.json({
    status: "success",
    data: {
      id: createdNotificationCategory.id,
      name: createdNotificationCategory.name,
      description: createdNotificationCategory.description,
      created_at: createdNotificationCategory.createdAt,
      updated_at: createdNotificationCategory.updatedAt,
    },
  });
};
