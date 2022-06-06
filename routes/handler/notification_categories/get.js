const { notification_category } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getNotificationCategory = await notification_category.findByPk(id, {
    attributes: ["id", "name", "description", "createdAt", "updatedAt"],
  });

  if (!getNotificationCategory) {
    return res.status(404).json({
      status: "error",
      message: "notification category not found",
    });
  }

  const specifiedNotificationCategory = {
    id: getNotificationCategory.id,
    name: getNotificationCategory.name,
    description: getNotificationCategory.description,
    created_at: getNotificationCategory.createdAt,
    updated_at: getNotificationCategory.updatedAt,
  };

  return res.json({
    status: "success",
    data: specifiedNotificationCategory,
  });
};
