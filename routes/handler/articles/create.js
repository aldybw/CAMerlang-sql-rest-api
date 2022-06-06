const isBase64 = require("is-base64");
const base64Img = require("base64-img");
const Validator = require("fastest-validator");
const v = new Validator();

const { article } = require("../../../models/");

module.exports = async (req, res) => {
  const schema = {
    thumbnail: {
      type: "string",
      empty: "false",
    },
    title: {
      type: "string",
      empty: "false",
    },
    type: {
      type: "enum",
      values: ["tips", "news", "people", "list", "review"],
    },
    readDuration: {
      type: "string",
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
    "./public/images/articles/thumbnails",
    Date.now(),
    async (err, filepath) => {
      if (err) {
        return res.status(400).json({ status: "error", message: err.message });
      }

      const filename = filepath.split("\\").pop().split("/").pop();

      const data = {
        thumbnail: `images/articles/thumbnails/${filename}`,
        title: req.body.title,
        type: req.body.type,
        readDuration: req.body.readDuration,
        contentHeader: req.body.contentHeader,
        content: req.body.content,
      };

      const createdArticle = await article.create(data);

      return res.json({
        status: "success",
        data: {
          id: createdArticle.id,
          thumbnail: `${req.get("host")}/${createdArticle.thumbnail}`,
          title: createdArticle.title,
          type: createdArticle.type,
          read_duration: createdArticle.readDuration,
          content_header: createdArticle.contentHeader,
          content: createdArticle.content,
          created_at: createdArticle.createdAt,
          updated_at: createdArticle.updatedAt,
        },
      });
    }
  );
};
