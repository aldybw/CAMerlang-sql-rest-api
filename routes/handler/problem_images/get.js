const { ProblemImage } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const problemImage = await ProblemImage.findByPk(id, {
    attributes: [
      "id",
      "image",
      "type",
      "description",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!problemImage) {
    return res.status(404).json({
      status: "error",
      message: "problem image not found",
    });
  }

  const specifiedProblemImage = {
    id: problemImage.id,
    image: problemImage.image,
    type: problemImage.type,
    description: problemImage.description,
    created_at: problemImage.createdAt,
    updated_at: problemImage.updatedAt,
  };

  return res.json({
    status: "success",
    data: specifiedProblemImage,
  });
};
