const { Notification } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const notification = await Notification.findByPk(id, {
    attributes: [
      "id",
      "type",
      "messageHeader",
      "messageContent",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!notification) {
    return res.status(404).json({
      status: "error",
      message: "notification not found",
    });
  }

  const specifiedNotification = {
    id: notification.id,
    type: notification.type,
    message_header: notification.messageHeader,
    message_content: notification.messageContent,
    created_at: notification.createdAt,
    updated_at: notification.updatedAt,
  };

  return res.json({
    status: "success",
    data: specifiedNotification,
  });
};
