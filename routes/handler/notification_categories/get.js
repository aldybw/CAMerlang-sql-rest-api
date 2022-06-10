const { NotificationCategory } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const notificationCategory = await NotificationCategory.findByPk(id, {
    attributes: ["id", "name", "description", "createdAt", "updatedAt"],
  });

  if (!notificationCategory) {
    return res.status(404).json({
      status: "error",
      message: "notification category not found",
    });
  }

  const specifiedNotificationCategory = {
    id: notificationCategory.id,
    name: notificationCategory.name,
    description: notificationCategory.description,
    created_at: notificationCategory.createdAt,
    updated_at: notificationCategory.updatedAt,
  };

  return res.json({
    status: "success",
    data: specifiedNotificationCategory,
  });
};
