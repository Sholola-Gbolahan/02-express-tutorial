const express = require("express")
const { products } = require("./data")

const app = express()
//  req => middleware => res

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

app.get("/", logger, (req, res) => {
  return res.send("Home")
})

app.get("/about", logger, (req, res) => {
  return res.send("about")
})

app.listen(5000, () => {
  console.log("server listening on port : 5000")
})
