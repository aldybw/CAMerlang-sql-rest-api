const isBase64 = require("is-base64");
const base64Img = require("base64-img");
const fs = require("fs");
const Validator = require("fastest-validator");
const v = new Validator();

const { article } = require("../../../models/");

module.exports = async (req, res) => {
  const schema = {
    thumbnail: {
      type: "string",
      optional: true,
    },
    title: {
      type: "string",
      empty: "false",
    },
    type: {
      type: "enum",
      values: ["tips", "news", "people", "list", "review"],
    },
    read_duration: {
      type: "string",
      empty: "false",
    },
    content_header: {
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
  const getArticle = await article.findByPk(id);
  if (!getArticle) {
    return res.status(404).json({
      status: "error",
      message: "article not found",
    });
  }

  const thumbnail = req.body.thumbnail;

  if (!thumbnail) {
    const { title, type, read_duration, content_header, content } = req.body;
    await getArticle.update({
      title,
      type,
      read_duration,
      content_header,
      content,
    });
    return res.json({
      status: "success",
      data: {
        id: getArticle.id,
        thumbnail: `${req.get("host")}/${getArticle.thumbnail}`,
        title,
        type,
        read_duration,
        content_header,
        content,
      },
    });
  } else {
    fs.unlink(`./public/${getArticle.thumbnail}`, async (err) => {
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
      "./public/images/thumbnails/articles",
      Date.now(),
      async (err, filepath) => {
        if (err) {
          return res
            .status(400)
            .json({ status: "error", message: err.message });
        }

        const filename = filepath.split("\\").pop().split("/").pop();

        const { title, type, read_duration, content_header, content } =
          req.body;
        await getArticle.update({
          thumbnail: `images/thumbnails/articles/${filename}`,
          title,
          type,
          read_duration,
          content_header,
          content,
        });

        return res.json({
          status: "success",
          data: {
            id: getArticle.id,
            thumbnail: `${req.get(
              "host"
            )}/images/thumbnails/articles/${filename}`,
            title,
            type,
            read_duration,
            content_header,
            content,
          },
        });
      }
    );
  }
};
