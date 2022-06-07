const { library } = require("../../../models/");

module.exports = async (req, res) => {
  const libraryIds = req.query.libraryIds || [];
  const libraryNames = req.query.libraryNames || [];
  const libraryBodyTypes = req.query.libraryBodyTypes || [];
  const libraryProblemSeverities = req.query.libraryProblemSeverities || [];
  const libraryContentHeaders = req.query.libraryContentHeaders || [];
  const libraryContents = req.query.libraryContents || [];

  const sqlOptions = {
    attributes: [
      "id",
      "thumbnail",
      "name",
      "bodyType",
      "problemSeverity",
      "contentHeader",
      "content",
      "createdAt",
      "updatedAt",
    ],
  };

  if (libraryIds.length) {
    sqlOptions.where = {
      id: libraryIds,
    };
  }
  if (libraryNames.length) {
    sqlOptions.where = {
      name: libraryNames,
    };
  }
  if (libraryBodyTypes.length) {
    sqlOptions.where = {
      bodyType: libraryBodyTypes,
    };
  }
  if (libraryProblemSeverities.length) {
    sqlOptions.where = {
      problemSeverity: libraryProblemSeverities,
    };
  }
  if (libraryContentHeaders.length) {
    sqlOptions.where = {
      contentHeader: libraryContentHeaders,
    };
  }
  if (libraryContents.length) {
    sqlOptions.where = {
      content: libraryContents,
    };
  }

  const getAllLibraries = await library.findAll(sqlOptions);

  if (getAllLibraries.length === 0) {
    return res.json({
      status: "success",
      message: "There is no libraries data",
    });
  }

  const mappedLibrary = getAllLibraries.map((l) => {
    l = {
      id: l.id,
      thumbnail: l.thumbnail,
      name: l.name,
      body_type: l.bodyType,
      problem_severity: l.problemSeverity,
      content_header: l.contentHeader,
      content: l.content,
      created_at: l.createdAt,
      updated_at: l.updatedAt,
    };
    return l;
  });

  return res.json({
    status: "success",
    data: mappedLibrary,
  });
};
