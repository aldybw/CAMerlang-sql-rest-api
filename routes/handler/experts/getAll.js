const { Expert } = require("../../../models/");

module.exports = async (req, res) => {
  const expertIds = req.query.expertIds || [];
  const expertNames = req.query.expertNames || [];
  const expertSpecializations = req.query.expertSpecializations || [];
  const expertScores = req.query.expertScores || [];
  const expertStatus = req.query.expertStatus || [];

  const sqlOptions = {
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
  };

  if (expertIds.length) {
    sqlOptions.where = {
      id: expertIds,
    };
  }
  if (expertNames.length) {
    sqlOptions.where = {
      name: expertNames,
    };
  }
  if (expertSpecializations.length) {
    sqlOptions.where = {
      specialization: expertSpecializations,
    };
  }
  if (expertScores.length) {
    sqlOptions.where = {
      score: expertScores,
    };
  }
  if (expertStatus.length) {
    sqlOptions.where = {
      status: expertStatus,
    };
  }

  const experts = await Expert.findAll(sqlOptions);

  if (experts.length === 0) {
    return res.json({
      status: "success",
      message: "There is no expert data",
    });
  }

  const mappedExpert = experts.map((e) => {
    e = {
      id: e.id,
      image: e.image,
      name: e.name,
      specialization: e.specialization,
      score: e.score,
      status: e.status,
      created_at: e.createdAt,
      updated_at: e.updatedAt,
    };
    return e;
  });

  return res.json({
    status: "success",
    data: mappedExpert,
  });
};
