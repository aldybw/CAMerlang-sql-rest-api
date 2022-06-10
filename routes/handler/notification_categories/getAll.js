const { NotificationCategory } = require("../../../models/");

module.exports = async (req, res) => {
  const notificationCategoryIds = req.query.notificationCategoryIds || [];
  const notificationCategoryNames = req.query.notificationCategoryNames || [];
  const notificationCategoryDescriptions =
    req.query.notificationCategoryDescriptions || [];

  const sqlOptions = {
    attributes: ["id", "name", "description", "createdAt", "updatedAt"],
  };

  if (notificationCategoryIds.length) {
    sqlOptions.where = {
      id: notificationCategoryIds,
    };
  }
  if (notificationCategoryNames.length) {
    sqlOptions.where = {
      name: notificationCategoryNames,
    };
  }
  if (notificationCategoryDescriptions.length) {
    sqlOptions.where = {
      description: notificationCategoryDescriptions,
    };
  }

  const notificationCategories = await NotificationCategory.findAll(sqlOptions);

  if (notificationCategories.length === 0) {
    return res.json({
      status: "success",
      message: "There is no notification category data",
    });
  }

  const mappedNotificationCategory = notificationCategories.map((n) => {
    n = {
      id: n.id,
      name: n.name,
      description: n.description,
      created_at: n.createdAt,
      updated_at: n.updatedAt,
    };
    return n;
  });

  return res.json({
    status: "success",
    data: mappedNotificationCategory,
  });
};
