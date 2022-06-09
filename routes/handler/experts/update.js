const Validator = require("fastest-validator");
const v = new Validator();

const { article } = require("../../../models");

module.exports = async (req, res) => {
  const schema = {
    image: {
      type: "string",
      optional: true,
    },
    name: {
      type: "string",
      optional: true,
    },
    specialization: {
      type: "string",
      optional: true,
    },
    score: {
      type: "number",
      optional: true,
    },
    status: {
      type: "enum",
      values: ["verified", "unverified"],
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

  const { image, name, specialization, score, status } = req.body;

  const updatedArticle = await getArticle.update({
    image,
    name,
    specialization,
    score,
    status,
  });

  return res.json({
    status: "success",
    data: {
      id: updatedArticle.id,
      image: updatedArticle.image,
      name: updatedArticle.name,
      specialization: updatedArticle.specialization,
      score: updatedArticle.score,
      status: updatedArticle.status,
      created_at: updatedArticle.createdAt,
      updated_at: updatedArticle.updatedAt,
    },
  });
};
