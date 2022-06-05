const isBase64 = require("is-base64");
const base64Img = require("base64-img");
const Validator = require("fastest-validator");
const v = new Validator();

const { library } = require("../../../models/");

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

  const thumbnail = req.body.thumbnail;

  if (!isBase64(thumbnail, { mimeRequired: true })) {
    return res.status(400).json({ status: "error", message: "invalid base64" });
  }

  base64Img.img(
    thumbnail,
    "./public/images/libraries/thumbnails",
    Date.now(),
    async (err, filepath) => {
      if (err) {
        return res.status(400).json({ status: "error", message: err.message });
      }

      const filename = filepath.split("\\").pop().split("/").pop();

      const data = {
        thumbnail: `images/libraries/thumbnails/${filename}`,
        name: req.body.name,
        bodyType: req.body.bodyType,
        problemSeverity: req.body.problemSeverity,
        contentHeader: req.body.contentHeader,
        content: req.body.content,
      };

      const createdLibrary = await library.create(data);

      return res.json({
        status: "success",
        data: {
          id: createdLibrary.id,
          thumbnail: `${req.get(
            "host"
          )}/images/libraries/thumbnails/${filename}`,
          name: createdLibrary.name,
          body_type: createdLibrary.bodyType,
          problem_severity: createdLibrary.problemSeverity,
          content_header: createdLibrary.contentHeader,
          content: createdLibrary.content,
          created_at: createdLibrary.createdAt,
          updated_at: createdLibrary.updatedAt,
        },
      });
    }
  );
};
