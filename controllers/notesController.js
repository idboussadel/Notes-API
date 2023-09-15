const Note = require("./../models/notesModel");
const Tag = require("./../models/tagsModel");
const { catchAsync } = require("./../controllers/errorsController");

exports.getAllNotes = catchAsync(async (req, res, next) => {
  const notes = await Note.find();
  res.status(200).json({
    status: "succes",
    message: { notes: notes },
  });
});
exports.createNote = catchAsync(async (req, res, next) => {
  const { title, content, tags } = req.body;
  const newNote = await Note.create({ title, content, tags });

  // update the notes ids in the tags model
  if (tags && tags.length > 0) {
    for (const tag of tags) {
      const updatedTag = await Tag.findOneAndUpdate(
        { name: tag },
        { $push: { notes: newNote._id } }
      );
      // if the findOneAndUpdate query was not a succes the updatedTag will be null
      if (!updatedTag) {
        return res.status(404).json({
          status: "error",
          message: `${tag} not found, please add only existing tags`,
        });
      }
    }
  }

  res.status(201).json({
    status: "succes",
    message: { note: newNote },
  });
});

exports.getNote = catchAsync(async (req, res, next) => {
  const note = await Note.findOne({ _id: req.params.id });
  res.status(201).json({
    status: "succes",
    message: { note: note },
  });
});

exports.deleteNote = catchAsync(async (req, res, next) => {
  await Note.deleteOne({ _id: req.params.id });
  res.status(201).json({
    status: "succes",
  });
});

exports.updateNoteTitle = catchAsync(async (req, res, next) => {
  const { title } = req.body;

  // Check if the content is falsy or not provided
  if (!title) {
    return res.status(400).json({
      status: "error",
      message: "Please provide a valid content for the note.",
    });
  }

  const updatedNote = await Note.findOneAndUpdate(
    { _id: req.params.id },
    { title: title },
    { new: true }
  );
  res.status(200).json({
    status: "succes",
    message: { note: updatedNote },
  });
});

exports.updateNoteContent = catchAsync(async (req, res, next) => {
  const { content } = req.body;

  // Check if the content is falsy or not provided
  if (!content) {
    return res.status(400).json({
      status: "error",
      message: "Please provide a valid content for the note.",
    });
  }

  const updatedNote = await Note.findOneAndUpdate(
    { _id: req.params.id },
    { content: content },
    { new: true }
  );
  res.status(200).json({
    status: "succes",
    message: { note: updatedNote },
  });
});

exports.filterByOneTag = catchAsync(async (req, res, next) => {
  const { tag } = req.query;
  const tagDocs = await Tag.find({ name: tag });

  if (!tagDocs || tagDocs.length === 0) {
    return res.status(404).json({
      status: "fail",
      message: `${tag} not found.`,
    });
  }

  const noteIds = tagDocs.flatMap((tagDoc) => tagDoc.notes);
  console.log(noteIds);

  const matchingNotes = await Note.aggregate([
    {
      $match: {
        _id: { $in: noteIds },
      },
    },
  ]);
  res.status(200).json({
    status: "success",
    lentgh: matchingNotes.length,
    data: { notes: matchingNotes },
  });
});
