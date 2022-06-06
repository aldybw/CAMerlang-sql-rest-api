const { problem_image } = require("../../../models/");

module.exports = async (req, res) => {
  const problemImageIds = req.query.problemImageIds || [];
  const problemImageImageDescription =
    req.query.problemImageImageDescription || [];

  const sqlOptions = {
    attributes: ["id", "image", "imageDescription", "createdAt", "updatedAt"],
  };

  if (problemImageIds.length) {
    sqlOptions.where = {
      id: problemImageIds,
    };
  }
  if (problemImageImageDescription.length) {
    sqlOptions.where = {
      name: problemImageImageDescription,
    };
  }

  const getAllProblemImages = await problem_image.findAll(sqlOptions);

  if (getAllProblemImages.length === 0) {
    return res.json({
      status: "success",
      message: "There is no libraries data",
    });
  }

  const mappedProblemImage = getAllProblemImages.map((l) => {
    l = {
      id: l.id,
      image: `${req.get("host")}/${l.image}`,
      image_description: l.imageDescription,
      created_at: l.createdAt,
      updated_at: l.updatedAt,
    };
    return l;
  });

  return res.json({
    status: "success",
    data: mappedProblemImage,
  });
};
