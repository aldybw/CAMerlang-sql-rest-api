const { library } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getLibrary = await library.findByPk(id);

  if (!getLibrary) {
    return res
      .status(404)
      .json({ status: "error", message: "library not found" });
  }

  await getLibrary.destroy();

  return res.json({
    status: "success",
    message: "library deleted",
  });
};
