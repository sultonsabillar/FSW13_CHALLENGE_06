// Internal Server Error Handler
const errorHandler = (err, req, res, next) => {
  console.log("Server Error")
  console.log(typeof err);
  if (err) {
    console.log(err);
  }
  res.status(500).json({
    status: 'error',
    error: err
  })
  next();
}

// 404 Handler
const error404Handler = (req, res, next) => {
  res.status(404).render('./404.ejs')
  next();
}

module.exports = { errorHandler, error404Handler };