const { expert } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getExpert = await expert.findByPk(id);

  if (!getExpert) {
    return res
      .status(404)
      .json({ status: "error", message: "expert not found" });
  }

  await getExpert.destroy();

  return res.json({
    status: "success",
    message: "expert deleted",
  });
};
