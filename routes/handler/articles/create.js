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
      empty: "false",
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

  const data = {
    thumbnail: req.body.thumbnail,
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
      thumbnail: createdArticle.thumbnail,
      title: createdArticle.title,
      type: createdArticle.type,
      read_duration: createdArticle.readDuration,
      content_header: createdArticle.contentHeader,
      content: createdArticle.content,
      created_at: createdArticle.createdAt,
      updated_at: createdArticle.updatedAt,
    },
  });
};
