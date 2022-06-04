const { article } = require("../../../models/");

module.exports = async (req, res) => {
  const articleIds = req.query.articleIds || [];
  const articleTitles = req.query.articleTitles || [];
  const articleTypes = req.query.articleTypes || [];
  const articleReadDurations = req.query.articleReadDurations || [];

  const sqlOptions = {
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
  };

  if (articleIds.length) {
    sqlOptions.where = {
      id: articleIds,
    };
  }
  if (articleTitles.length) {
    sqlOptions.where = {
      title: articleTitles,
    };
  }
  if (articleTypes.length) {
    sqlOptions.where = {
      type: articleTypes,
    };
  }
  if (articleReadDurations.length) {
    sqlOptions.where = {
      readDuration: articleReadDurations,
    };
  }

  const getAllArticles = await article.findAll(sqlOptions);

  if (getAllArticles.length === 0) {
    return res.json({
      status: "success",
      message: "There is no articles data",
    });
  }

  const mappedArticle = getAllArticles.map((a) => {
    a = {
      id: a.id,
      thumbnail: `${req.get("host")}/${a.thumbnail}`,
      title: a.title,
      type: a.type,
      read_duration: a.readDuration,
      content_header: a.contentHeader,
      content: a.content,
      created_at: a.createdAt,
      updated_at: a.updatedAt,
    };
    return a;
  });

  return res.json({
    status: "success",
    data: mappedArticle,
  });
};
