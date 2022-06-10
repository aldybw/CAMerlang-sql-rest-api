const Validator = require("fastest-validator");
const v = new Validator();

const { Library } = require("../../../models/");

module.exports = async (req, res) => {
  const schema = {
    thumbnail: {
      type: "string",
      empty: "false",
    },
    name: {
      type: "string",
      empty: "false",
    },
    bodyType: {
      type: "string",
      empty: "false",
    },
    problemSeverity: {
      type: "enum",
      values: ["light", "moderate", "serious", "severe", "critical", "various"],
      empty: "false",
    },
    contentHeader: {
      type: "string",
      empty: "false",
    },
    content: {
      type: "string",
      empty: "false",
    },
    expertImage: {
      type: "string",
      empty: "false",
    },
    expertName: {
      type: "string",
      empty: "false",
    },
    expertSpecialization: {
      type: "string",
      empty: "false",
    },
    expertVerificationDate: {
      type: "string",
      empty: "false",
    },
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const data = {
    thumbnail: req.body.thumbnail,
    name: req.body.name,
    bodyType: req.body.bodyType,
    problemSeverity: req.body.problemSeverity,
    contentHeader: req.body.contentHeader,
    content: req.body.content,
    expertImage: req.body.expertImage,
    expertName: req.body.expertName,
    expertSpecialization: req.body.expertSpecialization,
    expertVerificationDate: req.body.expertVerificationDate,
  };

  const createdLibrary = await Library.create(data);

  return res.json({
    status: "success",
    data: {
      id: createdLibrary.id,
      thumbnail: createdLibrary.thumbnail,
      name: createdLibrary.name,
      body_type: createdLibrary.bodyType,
      problem_severity: createdLibrary.problemSeverity,
      content_header: createdLibrary.contentHeader,
      content: createdLibrary.content,
      expert_image: createdLibrary.expertImage,
      expert_name: createdLibrary.expertName,
      expert_specialization: createdLibrary.expertSpecialization,
      expert_verification_date: createdLibrary.expertVerificationDate,
      created_at: createdLibrary.createdAt,
      updated_at: createdLibrary.updatedAt,
    },
  });
};
