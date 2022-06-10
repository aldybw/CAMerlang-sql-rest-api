const { Article } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const article = await Article.findByPk(id);

  if (!article) {
    return res
      .status(404)
      .json({ status: "error", message: "article not found" });
  }

  await article.destroy();

  return res.json({
    status: "success",
    message: "article deleted",
  });
};
