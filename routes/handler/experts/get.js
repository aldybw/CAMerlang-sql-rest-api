const { expert } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getExpert = await expert.findByPk(id, {
    attributes: [
      "id",
      "image",
      "name",
      "specialization",
      "score",
      "status",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!getExpert) {
    return res.status(404).json({
      status: "error",
      message: "expert not found",
    });
  }

  const specifiedExpert = {
    id: getExpert.id,
    image: getExpert.image,
    name: getExpert.name,
    specialization: getExpert.specialization,
    score: getExpert.score,
    status: getExpert.status,
    created_at: getExpert.createdAt,
    updated_at: getExpert.updatedAt,
  };

  return res.json({
    status: "success",
    data: specifiedExpert,
  });
};
