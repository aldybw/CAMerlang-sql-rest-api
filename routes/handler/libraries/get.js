const { article } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getArticle = await article.findByPk(id, {
    attributes: [
      "id",
      "thumbnail",
      "title",
      "type",
      "read_duration",
      "content_header",
      "content",
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
    thumbnail: `${req.get("host")}/${getArticle.thumbnail}`,
    title: getArticle.title,
    type: getArticle.type,
    read_duration: getArticle.read_duration,
    content_header: getArticle.content_header,
    content: getArticle.content,
  };

  return res.json({
    status: "success",
    data: specifiedArticle,
  });
};
