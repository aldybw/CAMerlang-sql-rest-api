const { article } = require("../../../models/");

module.exports = async (req, res) => {
  const articleIds = req.query.articleIds || [];
  const articleTitles = req.query.articleTitles || [];
  const articleTypes = req.query.articleTypes || [];
  const articleReadDurations = req.query.articleReadDurations || [];
  const articleContentHeaders = req.query.articleContentHeaders || [];
  const articleContents = req.query.articleContents || [];
  const articleExpertNames = req.query.articleExpertNames || [];
  const articleExpertSpecializations =
    req.query.articleExpertSpecializations || [];

  const sqlOptions = {
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
  if (articleContentHeaders.length) {
    sqlOptions.where = {
      contentHeader: articleContentHeaders,
    };
  }
  if (articleContents.length) {
    sqlOptions.where = {
      content: articleContents,
    };
  }
  if (articleExpertNames.length) {
    sqlOptions.where = {
      expertName: articleExpertNames,
    };
  }
  if (articleExpertSpecializations.length) {
    sqlOptions.where = {
      expertSpecialization: articleExpertSpecializations,
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
      thumbnail: a.thumbnail,
      title: a.title,
      type: a.type,
      read_duration: a.readDuration,
      content_header: a.contentHeader,
      content: a.content,
      expert_image: a.expertImage,
      expert_name: a.expertName,
      expert_specialization: a.expertSpecialization,
      expert_verification_date: a.expertVerificationDate,
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
