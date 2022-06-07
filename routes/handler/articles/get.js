const { article } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getArticle = await article.findByPk(id, {
    attributes: [
      "id",
      "thumbnail",
      "title",
      "type",
      "readDuration",
      "contentHeader",
      "content",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!getArticle) {
    return res.status(404).json({
      status: "error",
      message: "article not found",
    });
  }

  const specifiedArticle = {
    id: getArticle.id,
    thumbnail: getArticle.thumbnail,
    title: getArticle.title,
    type: getArticle.type,
    read_duration: getArticle.readDuration,
    content_header: getArticle.contentHeader,
    content: getArticle.content,
    created_at: getArticle.createdAt,
    updated_at: getArticle.updatedAt,
  };

  return res.json({
    status: "success",
    data: specifiedArticle,
  });
};
