const Validator = require("fastest-validator");
const v = new Validator();

const { library } = require("../../../models/");

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
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const id = req.params.id;
  const getLibrary = await library.findByPk(id);
  if (!getLibrary) {
    return res.status(404).json({
      status: "error",
      message: "library not found",
    });
  }

  const { thumbnail, name, bodyType, problemSeverity, contentHeader, content } =
    req.body;
  const updatedLibrary = await getLibrary.update({
    thumbnail,
    name,
    bodyType,
    problemSeverity,
    contentHeader,
    content,
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
      created_at: updatedLibrary.createdAt,
      updated_at: updatedLibrary.updatedAt,
    },
  });
};
