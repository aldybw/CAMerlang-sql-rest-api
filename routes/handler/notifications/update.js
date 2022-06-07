const Validator = require("fastest-validator");
const v = new Validator();

const { notification } = require("../../../models/");

module.exports = async (req, res) => {
  const schema = {
    type: {
      type: "enum",
      values: ["general", "tips", "reminder"],
      optional: true,
    },
    messageHeader: {
      type: "string",
      optional: true,
    },
    messageContent: {
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
  const getNotification = await notification.findByPk(id);
  if (!getNotification) {
    return res.status(404).json({
      status: "error",
      message: "notification not found",
    });
  }

  const { type, messageHeader, messageContent } = req.body;
  const updatedNotification = await getNotification.update({
    type,
    messageHeader,
    messageContent,
  });
  return res.json({
    status: "success",
    data: {
      id: updatedNotification.id,
      type: updatedNotification.type,
      message_header: updatedNotification.messageHeader,
      message_content: updatedNotification.messageContent,
      created_at: updatedNotification.createdAt,
      updated_at: updatedNotification.updatedAt,
    },
  });
};
