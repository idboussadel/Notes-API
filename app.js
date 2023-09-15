const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const notesRouter = require("./routers/notesRouter");
const { AppError } = require("./controllers/errorsController");
const tagsRouter = require("./routers/tagsRouter");
const {
  handleDuplicateFieldsDB,
  handleValidationErrorDB,
  sendErrorDev,
  handleCastErrorDB,
  sendErrorProd,
} = require("./controllers/errorsController");

require("dotenv").config();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// express middleware for routes
app.use("/api/v1/notes", notesRouter);
app.use("/api/v1/tags", tagsRouter);

// express middleware to catch invalid routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// express middleware to catch errors
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    if (err.name === "CastError") err = handleCastErrorDB(err);
    if (err.code === 11000) err = handleDuplicateFieldsDB(err);
    if (err.name === "ValidationError") err = handleValidationErrorDB(err);
    sendErrorProd(err, res);
  }
});

module.exports = app;
