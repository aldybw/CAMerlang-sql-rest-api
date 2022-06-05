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
    const { title, type, readDuration, contentHeader, content } = req.body;
    const updatedArticle = await getArticle.update({
      title,
      type,
      readDuration,
      contentHeader,
      content,
    });
    return res.json({
      status: "success",
      data: {
        id: updatedArticle.id,
        thumbnail: `${req.get("host")}/${updatedArticle.thumbnail}`,
        title,
        type,
        read_duration: updatedArticle.readDuration,
        contentHeader: updatedArticle.contentHeader,
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
      "./public/images/articles/thumbnails",
      Date.now(),
      async (err, filepath) => {
        if (err) {
          return res
            .status(400)
            .json({ status: "error", message: err.message });
        }

        const filename = filepath.split("\\").pop().split("/").pop();

        const { title, type, readDuration, contentHeader, content } = req.body;

        const updatedArticle = await getArticle.update({
          thumbnail: `images/articles/thumbnails/${filename}`,
          title,
          type,
          readDuration,
          contentHeader,
          content,
        });

        return res.json({
          status: "success",
          data: {
            id: getArticle.id,
            thumbnail: `${req.get(
              "host"
            )}/images/articles/thumbnails/${filename}`,
            title,
            type,
            read_duration: updatedArticle.readDuration,
            contentHeader: updatedArticle.contentHeader,
            content,
          },
        });
      }
    );
  }
};
