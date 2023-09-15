const express = require("express");
const mongoose = require("mongoose");
const tagsController = require("./../controllers/tagsController");

const router = express.Router();

router.use("/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID format",
    });
  }
  next();
});

router.route("/").get(tagsController.getAllTags).post(tagsController.createTag);
router
  .route("/:id")
  .get(tagsController.getTag)
  .patch(tagsController.updateTagName)
  .delete(tagsController.deleteTag);

module.exports = router;
