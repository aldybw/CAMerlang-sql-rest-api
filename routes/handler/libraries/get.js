const { library } = require("../../../models/");
const { problem_image } = require("../../../models/");

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

  const getAllProblemImages = await problem_image.findAll({
    where: {
      type: getLibrary.name,
    },
  });

  const mappedProblemImage = getAllProblemImages.map((p) => {
    p = {
      id: p.id,
      image: p.image,
    };
    return p;
  });

  return res.json({
    status: "success",
    data: {
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
      problem_images: mappedProblemImage,
      created_at: getLibrary.createdAt,
      updated_at: getLibrary.updatedAt,
    },
  });
};
