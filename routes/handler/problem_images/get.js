const { problem_image } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getProblemImage = await problem_image.findByPk(id, {
    attributes: ["id", "image", "description", "createdAt", "updatedAt"],
  });

  if (!getProblemImage) {
    return res.status(404).json({
      status: "error",
      message: "problem image not found",
    });
  }

  const specifiedProblemImage = {
    id: getProblemImage.id,
    image: getProblemImage.image,
    description: getProblemImage.description,
    created_at: getProblemImage.createdAt,
    updated_at: getProblemImage.updatedAt,
  };

  return res.json({
    status: "success",
    data: specifiedProblemImage,
  });
};
