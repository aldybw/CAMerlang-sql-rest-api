const { notification_category } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getNotificationCategory = await notification_category.findByPk(id);

  if (!getNotificationCategory) {
    return res
      .status(404)
      .json({ status: "error", message: "notification category not found" });
  }

  await getNotificationCategory.destroy();

  return res.json({
    status: "success",
    message: "notification category deleted",
  });
};
