const { NotificationCategory } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const notificationCategory = await NotificationCategory.findByPk(id);

  if (!notificationCategory) {
    return res
      .status(404)
      .json({ status: "error", message: "notification category not found" });
  }

  await notificationCategory.destroy();

  return res.json({
    status: "success",
    message: "notification category deleted",
  });
};
