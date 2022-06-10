const Validator = require("fastest-validator");
const v = new Validator();

const { NotificationCategory } = require("../../../models/");

module.exports = async (req, res) => {
  const schema = {
    name: {
      type: "enum",
      values: ["general", "tips", "reminder"],
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
  const notificationCategory = await NotificationCategory.findByPk(id);
  if (!notificationCategory) {
    return res.status(404).json({
      status: "error",
      message: "notification category not found",
    });
  }

  const { name, description } = req.body;
  const updatedNotificationCategory = await notificationCategory.update({
    name,
    description,
  });
  return res.json({
    status: "success",
    data: {
      id: updatedNotificationCategory.id,
      name: updatedNotificationCategory.name,
      description: updatedNotificationCategory.description,
      created_at: updatedNotificationCategory.createdAt,
      updated_at: updatedNotificationCategory.updatedAt,
    },
  });
};
