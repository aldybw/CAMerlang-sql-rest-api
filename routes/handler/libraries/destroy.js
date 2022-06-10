const { Library } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const library = await Library.findByPk(id);

  if (!library) {
    return res
      .status(404)
      .json({ status: "error", message: "library not found" });
  }

  await library.destroy();

  return res.json({
    status: "success",
    message: "library deleted",
  });
};
