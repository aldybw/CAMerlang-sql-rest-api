const fs = require("fs");
const { library } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getLibrary = await library.findByPk(id);

  if (!getLibrary) {
    return res
      .status(404)
      .json({ status: "error", message: "library not found" });
  }

  fs.unlink(`./public/${getLibrary.thumbnail}`, async (err) => {
    if (err) {
      return res.status(400).json({ status: "error", message: err.message });
    }

    await getLibrary.destroy();

    return res.json({
      status: "success",
      message: "library deleted",
    });
  });
};
