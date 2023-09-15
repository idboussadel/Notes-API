const express = require("express");
const mongoose = require("mongoose");
const notesController = require("./../controllers/notesController");
const { checkTags, checkOneTag } = require("./../controllers/tagsController");

const router = express.Router();

// param middlware

router
  .route("/")
  .get(notesController.getAllNotes)
  .post(checkTags, notesController.createNote);

router.route("/filter-by-tag").get(checkOneTag, notesController.filterByOneTag);

router.use("/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID format",
    });
  }
  next();
});

router
  .route("/:id")
  .get(notesController.getNote)
  .delete(notesController.deleteNote);

router.route("/:id/title").patch(notesController.updateNoteTitle);
router.route("/:id/content").patch(notesController.updateNoteContent);

module.exports = router;
