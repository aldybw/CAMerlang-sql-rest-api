const { Notification } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const notification = await Notification.findByPk(id);

  if (!notification) {
    return res
      .status(404)
      .json({ status: "error", message: "notification not found" });
  }

  await notification.destroy();

  return res.json({
    status: "success",
    message: "notification deleted",
  });
};
