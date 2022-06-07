const { library } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getLibrary = await library.findByPk(id, {
    attributes: [
      "id",
      "thumbnail",
      "name",
      "bodyType",
      "problemSeverity",
      "contentHeader",
      "content",
      "expertImage",
      "expertName",
      "expertSpecialization",
      "expertVerificationDate",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!getLibrary) {
    return res.status(404).json({
      status: "error",
      message: "library not found",
    });
  }

  const specifiedLibrary = {
    id: getLibrary.id,
    thumbnail: getLibrary.thumbnail,
    name: getLibrary.name,
    body_type: getLibrary.bodyType,
    problem_severity: getLibrary.problemSeverity,
    content_header: getLibrary.contentHeader,
    content: getLibrary.content,
    expert_image: getLibrary.expertImage,
    expert_name: getLibrary.expertName,
    expert_specialization: getLibrary.expertSpecialization,
    expert_verification_date: getLibrary.expertVerificationDate,
    created_at: getLibrary.createdAt,
    updated_at: getLibrary.updatedAt,
  };

  return res.json({
    status: "success",
    data: specifiedLibrary,
  });
};
