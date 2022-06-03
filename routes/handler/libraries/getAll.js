const { article } = require("../../../models/");

module.exports = async (req, res) => {
  const articleIds = req.query.article_ids || [];
  const articleTitles = req.query.article_titles || [];
  const articleTypes = req.query.article_types || [];
  const articleReadDurations = req.query.article_read_durations || [];

  const sqlOptions = {
    attributes: [
      "id",
      "thumbnail",
      "title",
      "type",
      "read_duration",
      "content_header",
      "content",
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
      read_duration: articleReadDurations,
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
    a.id = a.id;
    a.thumbnail = `${req.get("host")}/${a.thumbnail}`;
    a.title = a.title;
    a.type = a.type;
    a.read_duration = a.read_duration;
    a.content_header = a.content_header;
    a.content = a.content;
    return a;
  });

  return res.json({
    status: "success",
    data: mappedArticle,
  });
};
