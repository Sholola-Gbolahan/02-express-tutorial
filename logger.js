const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)

  // terminating the whole cycle and sending the response
  // res.send("Testing")

  // Passing to the next middleware
  next()
}

module.exports = logger
