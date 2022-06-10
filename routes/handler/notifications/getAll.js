const { Notification } = require("../../../models/");

module.exports = async (req, res) => {
  const notificationIds = req.query.notificationIds || [];
  const notificationTypes = req.query.notificationTypes || [];
  const notificationMessageHeaders = req.query.notificationMessageHeaders || [];
  const notificationMessageContents =
    req.query.notificationMessageContents || [];

  const sqlOptions = {
    attributes: [
      "id",
      "type",
      "messageHeader",
      "messageContent",
      "createdAt",
      "updatedAt",
    ],
  };

  if (notificationIds.length) {
    sqlOptions.where = {
      id: notificationIds,
    };
  }
  if (notificationTypes.length) {
    sqlOptions.where = {
      type: notificationTypes,
    };
  }
  if (notificationMessageHeaders.length) {
    sqlOptions.where = {
      messageHeader: notificationMessageHeaders,
    };
  }
  if (notificationMessageContents.length) {
    sqlOptions.where = {
      messageContent: notificationMessageContents,
    };
  }

  const notifications = await Notification.findAll(sqlOptions);

  if (notifications.length === 0) {
    return res.json({
      status: "success",
      message: "There is no notification data",
    });
  }

  const mappedNotification = notifications.map((n) => {
    n = {
      id: n.id,
      type: n.type,
      message_header: n.messageHeader,
      message_content: n.messageContent,
      created_at: n.createdAt,
      updated_at: n.updatedAt,
    };
    return n;
  });

  return res.json({
    status: "success",
    data: mappedNotification,
  });
};
