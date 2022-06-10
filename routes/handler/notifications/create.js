const Validator = require("fastest-validator");
const v = new Validator();

const { Notification } = require("../../../models/");

module.exports = async (req, res) => {
  const schema = {
    type: {
      type: "enum",
      values: ["general", "tips", "reminder"],
      empty: "false",
    },
    messageHeader: {
      type: "string",
      empty: "false",
    },
    messageContent: {
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
    type: req.body.type,
    messageHeader: req.body.messageHeader,
    messageContent: req.body.messageContent,
  };

  const createdNotification = await Notification.create(data);

  return res.json({
    status: "success",
    data: {
      id: createdNotification.id,
      type: createdNotification.type,
      message_header: createdNotification.messageHeader,
      message_content: createdNotification.messageContent,
      created_at: createdNotification.createdAt,
      updated_at: createdNotification.updatedAt,
    },
  });
};
