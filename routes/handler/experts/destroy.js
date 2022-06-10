const { Expert } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const expert = await Expert.findByPk(id);

  if (!expert) {
    return res
      .status(404)
      .json({ status: "error", message: "expert not found" });
  }

  await expert.destroy();

  return res.json({
    status: "success",
    message: "expert deleted",
  });
};
