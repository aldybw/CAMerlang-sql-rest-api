const Validator = require("fastest-validator");
const v = new Validator();

const { Library } = require("../../../models/");

module.exports = async (req, res) => {
  const schema = {
    thumbnail: {
      type: "string",
      optional: true,
    },
    name: {
      type: "string",
      optional: true,
    },
    bodyType: {
      type: "string",
      optional: true,
    },
    problemSeverity: {
      type: "enum",
      values: ["light", "moderate", "serious", "severe", "critical", "various"],
      optional: true,
    },
    contentHeader: {
      type: "string",
      optional: true,
    },
    content: {
      type: "string",
      optional: true,
    },
    expertImage: {
      type: "string",
      optional: true,
    },
    expertName: {
      type: "string",
      optional: true,
    },
    expertSpecialization: {
      type: "string",
      optional: true,
    },
    expertVerificationDate: {
      type: "string",
      optional: true,
    },
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const id = req.params.id;
  const library = await Library.findByPk(id);
  if (!library) {
    return res.status(404).json({
      status: "error",
      message: "library not found",
    });
  }

  const {
    thumbnail,
    name,
    bodyType,
    problemSeverity,
    contentHeader,
    content,
    expertImage,
    expertName,
    expertSpecialization,
    expertVerificationDate,
  } = req.body;

  const updatedLibrary = await library.update({
    thumbnail,
    name,
    bodyType,
    problemSeverity,
    contentHeader,
    content,
    expertImage,
    expertName,
    expertSpecialization,
    expertVerificationDate,
  });

  return res.json({
    status: "success",
    data: {
      id: updatedLibrary.id,
      thumbnail: updatedLibrary.thumbnail,
      name: updatedLibrary.name,
      body_type: updatedLibrary.bodyType,
      problem_severity: updatedLibrary.problemSeverity,
      content_header: updatedLibrary.contentHeader,
      content: updatedLibrary.content,
      expert_image: updatedLibrary.expertImage,
      expert_name: updatedLibrary.expertName,
      expert_specialization: updatedLibrary.expertSpecialization,
      expert_verification_date: updatedLibrary.expertVerificationDate,
      created_at: updatedLibrary.createdAt,
      updated_at: updatedLibrary.updatedAt,
    },
  });
};
