const { Article } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const article = await Article.findByPk(id, {
    attributes: [
      "id",
      "thumbnail",
      "title",
      "type",
      "read_duration",
      "content",
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
    thumbnail: `${req.get("host")}/${article.thumbnail}`,
    title: article.title,
    type: article.type,
    read_duration: article.read_duration,
    content: article.content,
  };

  return res.json({
    status: "success",
    data: specifiedArticle,
  });
};
