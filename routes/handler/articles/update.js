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
      optional: true,
    },
    type: {
      type: "enum",
      values: ["tips", "news", "people", "list", "review"],
      optional: true,
    },
    readDuration: {
      type: "string",
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
  const getArticle = await article.findByPk(id);
  if (!getArticle) {
    return res.status(404).json({
      status: "error",
      message: "article not found",
    });
  }

  const {
    thumbnail,
    title,
    type,
    readDuration,
    contentHeader,
    content,
    expertImage,
    expertName,
    expertSpecialization,
    expertVerificationDate,
  } = req.body;

  const updatedArticle = await getArticle.update({
    thumbnail,
    title,
    type,
    readDuration,
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
      id: updatedArticle.id,
      thumbnail: updatedArticle.thumbnail,
      title: updatedArticle.title,
      type: updatedArticle.type,
      read_duration: updatedArticle.readDuration,
      content_header: updatedArticle.contentHeader,
      content: updatedArticle.content,
      expert_image: updatedArticle.expertImage,
      expert_name: updatedArticle.expertName,
      expert_specialization: updatedArticle.expertSpecialization,
      expert_verification_date: updatedArticle.expertVerificationDate,
      created_at: updatedArticle.createdAt,
      updated_at: updatedArticle.updatedAt,
    },
  });
};
