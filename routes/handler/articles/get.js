const { article } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const singleArticle = await article.findByPk(id, {
    attributes: [
      "id",
      "thumbnail",
      "title",
      "type",
      "read_duration",
      "content",
    ],
  });

  if (!singleArticle) {
    return res.status(404).json({
      status: "error",
      message: "article not found",
    });
  }

  const specifiedArticle = {
    id: singleArticle.id,
    thumbnail: `${req.get("host")}/${singleArticle.thumbnail}`,
    title: singleArticle.title,
    type: singleArticle.type,
    read_duration: singleArticle.read_duration,
    content: singleArticle.content,
  };

  return res.json({
    status: "success",
    data: specifiedArticle,
  });
};
