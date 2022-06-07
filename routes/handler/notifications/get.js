const { notification } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getNotification = await notification.findByPk(id, {
    attributes: [
      "id",
      "type",
      "messageHeader",
      "messageContent",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!getNotification) {
    return res.status(404).json({
      status: "error",
      message: "notification not found",
    });
  }

  const specifiedNotification = {
    id: getNotification.id,
    type: getNotification.type,
    message_header: getNotification.messageHeader,
    message_content: getNotification.messageContent,
    created_at: getNotification.createdAt,
    updated_at: getNotification.updatedAt,
  };

  return res.json({
    status: "success",
    data: specifiedNotification,
  });
};
