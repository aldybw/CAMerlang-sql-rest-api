const fs = require("fs");
const { Article } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const article = await Article.findByPk(id);

  if (!article) {
    return res
      .status(404)
      .json({ status: "error", message: "article not found" });
  }

  fs.unlink(`./public/${article.thumbnail}`, async (err) => {
    if (err) {
      return res.status(400).json({ status: "error", message: err.message });
    }

    await article.destroy();

    return res.json({
      status: "success",
      message: "article deleted",
    });
  });
};
