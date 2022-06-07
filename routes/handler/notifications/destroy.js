const { notification } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getNotification = await notification.findByPk(id);

  if (!getNotification) {
    return res
      .status(404)
      .json({ status: "error", message: "notification not found" });
  }

  await getNotification.destroy();

  return res.json({
    status: "success",
    message: "notification deleted",
  });
};
