const { problem_image } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getProblemImage = await problem_image.findByPk(id);

  if (!getProblemImage) {
    return res
      .status(404)
      .json({ status: "error", message: "problem image not found" });
  }

  await getProblemImage.destroy();

  return res.json({
    status: "success",
    message: "problem image deleted",
  });
};
