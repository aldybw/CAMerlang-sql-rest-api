const { Article } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const article = await Article.findByPk(id, {
    attributes: [
      "id",
      "thumbnail",
      "title",
      "type",
      "readDuration",
      "contentHeader",
      "content",
      "expertImage",
      "expertName",
      "expertSpecialization",
      "expertVerificationDate",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!article) {
    return res.status(404).json({
      status: "error",
      message: "article not found",
    });
  }

  const specifiedArticle = {
    id: article.id,
    thumbnail: article.thumbnail,
    title: article.title,
    type: article.type,
    read_duration: article.readDuration,
    content_header: article.contentHeader,
    content: article.content,
    expert_image: article.expertImage,
    expert_name: article.expertName,
    expert_specialization: article.expertSpecialization,
    expert_verification_date: article.expertVerificationDate,
    created_at: article.createdAt,
    updated_at: article.updatedAt,
  };

  return res.json({
    status: "success",
    data: specifiedArticle,
  });
};
