const { ProblemImage } = require("../../../models/");

module.exports = async (req, res) => {
  const problemImageIds = req.query.problemImageIds || [];
  const problemImageTypes = req.query.problemImageTypes || [];
  const problemImageDescriptions = req.query.problemImageDescriptions || [];

  const sqlOptions = {
    attributes: [
      "id",
      "image",
      "type",
      "description",
      "createdAt",
      "updatedAt",
    ],
  };

  if (problemImageIds.length) {
    sqlOptions.where = {
      id: problemImageIds,
    };
  }
  if (problemImageTypes.length) {
    sqlOptions.where = {
      type: problemImageTypes,
    };
  }
  if (problemImageDescriptions.length) {
    sqlOptions.where = {
      description: problemImageDescriptions,
    };
  }

  const problemImages = await ProblemImage.findAll(sqlOptions);

  if (problemImages.length === 0) {
    return res.json({
      status: "success",
      message: "There is no problem image data",
    });
  }

  const mappedProblemImage = problemImages.map((p) => {
    p = {
      id: p.id,
      image: p.image,
      type: p.type,
      description: p.description,
      created_at: p.createdAt,
      updated_at: p.updatedAt,
    };
    return p;
  });

  return res.json({
    status: "success",
    data: mappedProblemImage,
  });
};
