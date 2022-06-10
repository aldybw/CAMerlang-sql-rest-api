const { Expert } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const expert = await Expert.findByPk(id, {
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

  if (!expert) {
    return res.status(404).json({
      status: "error",
      message: "expert not found",
    });
  }

  const specifiedExpert = {
    id: expert.id,
    image: expert.image,
    name: expert.name,
    specialization: expert.specialization,
    score: expert.score,
    status: expert.status,
    created_at: expert.createdAt,
    updated_at: expert.updatedAt,
  };

  return res.json({
    status: "success",
    data: specifiedExpert,
  });
};
