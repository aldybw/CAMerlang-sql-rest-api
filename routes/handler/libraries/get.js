const { Library, ProblemImage } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const library = await Library.findByPk(id, {
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

  if (!library) {
    return res.status(404).json({
      status: "error",
      message: "library not found",
    });
  }

  const problemImages = await ProblemImage.findAll({
    where: {
      type: library.name,
    },
  });

  const mappedProblemImage = problemImages.map((p) => {
    p = {
      id: p.id,
      image: p.image,
    };
    return p;
  });

  return res.json({
    status: "success",
    data: {
      id: library.id,
      thumbnail: library.thumbnail,
      name: library.name,
      body_type: library.bodyType,
      problem_severity: library.problemSeverity,
      content_header: library.contentHeader,
      content: library.content,
      expert_image: library.expertImage,
      expert_name: library.expertName,
      expert_specialization: library.expertSpecialization,
      expert_verification_date: library.expertVerificationDate,
      problem_images: mappedProblemImage,
      created_at: library.createdAt,
      updated_at: library.updatedAt,
    },
  });
};
