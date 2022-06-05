const isBase64 = require("is-base64");
const base64Img = require("base64-img");
const fs = require("fs");
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
      empty: "false",
    },
    bodyType: {
      type: "string",
      empty: "false",
    },
    problemSeverity: {
      type: "enum",
      values: ["light", "moderate", "serious", "severe", "critical", "various"],
    },
    contentHeader: {
      type: "string",
      empty: "false",
    },
    content: {
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

  const id = req.params.id;
  const getLibrary = await library.findByPk(id);
  if (!getLibrary) {
    return res.status(404).json({
      status: "error",
      message: "library not found",
    });
  }

  const thumbnail = req.body.thumbnail;

  if (!thumbnail) {
    const { name, bodyType, problemSeverity, contentHeader, content } =
      req.body;
    const updatedLibrary = await getLibrary.update({
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
        thumbnail: `${req.get("host")}/${updatedLibrary.thumbnail}`,
        name,
        body_type: updatedLibrary.bodyType,
        problem_severity: updatedLibrary.problemSeverity,
        content_header: updatedLibrary.contentHeader,
        content,
        created_at: updatedLibrary.createdAt,
        updated_at: updatedLibrary.updatedAt,
      },
    });
  } else {
    fs.unlink(`./public/${getLibrary.thumbnail}`, async (err) => {
      if (err) {
        return res.status(400).json({ status: "error", message: err.message });
      }
    });

    if (!isBase64(thumbnail, { mimeRequired: true })) {
      return res
        .status(400)
        .json({ status: "error", message: "invalid base64" });
    }

    base64Img.img(
      thumbnail,
      "./public/images/libraries/thumbnails",
      Date.now(),
      async (err, filepath) => {
        if (err) {
          return res
            .status(400)
            .json({ status: "error", message: err.message });
        }

        const filename = filepath.split("\\").pop().split("/").pop();

        const { name, bodyType, problemSeverity, contentHeader, content } =
          req.body;
        const updatedLibrary = await getLibrary.update({
          thumbnail: `images/libraries/thumbnails/${filename}`,
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
            thumbnail: `${req.get("host")}/${updatedLibrary.thumbnail}`,
            name,
            body_type: updatedLibrary.bodyType,
            problem_severity: updatedLibrary.problemSeverity,
            content_header: updatedLibrary.contentHeader,
            content,
            created_at: updatedLibrary.createdAt,
            updated_at: updatedLibrary.updatedAt,
          },
        });
      }
    );
  }
};
