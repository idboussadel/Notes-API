const Tag = require("./../models/tagsModel");
const { catchAsync, AppError } = require("./../controllers/errorsController");

exports.checkTags = catchAsync(async (req, res, next) => {
  const { tags } = req.body;

  if (Array.isArray(tags)) {
    for (const tag of tags) {
      const existingTag = await Tag.findOne({ name: tag });
      if (!existingTag) {
        const error = new AppError(`Tag ${tag} does not exist.`, 400);
        return next(error);
      }
    }
  } else {
    const existingTag = await Tag.findOne({ name: tags });
    if (!existingTag) {
      const error = new AppError(`Tag ${tags} does not exist.`, 400);
      return next(error);
    }
  }

  next();
});

exports.checkOneTag = catchAsync(async (req, res, next) => {
  const { tag } = req.query;

  if (tag) {
    const tagArray = tag.split(",");
    if (tagArray.length > 1) {
      const error = new AppError("Filter allowed by only one tag", 400);
      return next(error);
    }
  }

  if (tag) {
    const existingTag = await Tag.findOne({ name: tag });

    if (!existingTag) {
      const error = new AppError(`Tag ${tag} does not exist.`, 400);
      return next(error);
    }
  }

  next();
});

exports.getAllTags = catchAsync(async (req, res, next) => {
  const tags = await Tag.find();
  res.status(200).json({
    status: "success",
    message: { tags: tags },
  });
});

exports.createTag = catchAsync(async (req, res, next) => {
  const { name } = req.body;
  const newTag = await Tag.create({ name });
  res.status(201).json({
    status: "success",
    message: { tag: newTag },
  });
});

exports.getTag = catchAsync(async (req, res, next) => {
  const tag = await Tag.findOne({ _id: req.params.id });
  res.status(201).json({
    status: "success",
    message: { tag: tag },
  });
});

exports.updateTagName = catchAsync(async (req, res, next) => {
  const updatedTag = await Tag.findOneAndUpdate(
    { _id: req.params.id },
    { name: req.body.name },
    { new: true }
  );
  res.status(201).json({
    status: "success",
    message: { tag: updatedTag },
  });
});

exports.deleteTag = catchAsync(async (req, res, next) => {
  await Tag.deleteOne({ _id: req.params.id });
  res.status(201).json({
    status: "success",
  });
});
