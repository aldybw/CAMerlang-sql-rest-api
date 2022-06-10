const { ProblemImage } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const problemImage = await ProblemImage.findByPk(id);

  if (!problemImage) {
    return res
      .status(404)
      .json({ status: "error", message: "problem image not found" });
  }

  await problemImage.destroy();

  return res.json({
    status: "success",
    message: "problem image deleted",
  });
};
