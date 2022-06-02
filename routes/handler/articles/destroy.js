const fs = require("fs");
const { article } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const singleArticle = await article.findByPk(id);

  if (!singleArticle) {
    return res
      .status(404)
      .json({ status: "error", message: "article not found" });
  }

  fs.unlink(`./public/${singleArticle.thumbnail}`, async (err) => {
    if (err) {
      return res.status(400).json({ status: "error", message: err.message });
    }

    await singleArticle.destroy();

    return res.json({
      status: "success",
      message: "article deleted",
    });
  });
};
