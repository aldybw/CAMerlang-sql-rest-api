const { problem_image } = require("../../../models/");

module.exports = async (req, res) => {
  const problemImageIds = req.query.problemImageIds || [];
  const problemImageDescriptions = req.query.problemImageDescriptions || [];

  const sqlOptions = {
    attributes: ["id", "image", "description", "createdAt", "updatedAt"],
  };

  if (problemImageIds.length) {
    sqlOptions.where = {
      id: problemImageIds,
    };
  }
  if (problemImageDescriptions.length) {
    sqlOptions.where = {
      description: problemImageDescriptions,
    };
  }

  const getAllProblemImages = await problem_image.findAll(sqlOptions);

  if (getAllProblemImages.length === 0) {
    return res.json({
      status: "success",
      message: "There is no problem images data",
    });
  }

  const mappedProblemImage = getAllProblemImages.map((p) => {
    p = {
      id: p.id,
      image: `${req.get("host")}/${p.image}`,
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
