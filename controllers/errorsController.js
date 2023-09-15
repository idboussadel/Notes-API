class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    Error.captureStackTrace(this, this.constructor);
  }
}
exports.AppError = AppError;

exports.catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

exports.handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

exports.handleDuplicateFieldsDB = (err) => {
  const fieldName = Object.keys(err.keyValue)[0];
  const message = `Duplicate field value: ${err.keyValue[fieldName]}. Please use another value for ${fieldName}.`;
  return new AppError(message, 400);
};

exports.handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);

  const message = `Invalid input data. ${errors.join(". ")}`;
  return new AppError(message, 400);
};

exports.sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

exports.sendErrorProd = (err, res) => {
  console.log(err.message);
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
