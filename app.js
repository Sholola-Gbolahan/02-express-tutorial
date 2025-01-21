const express = require("express")
const { products } = require("./data")
const logger = require("./logger")
const app = express()
//  req => middleware => res

app.use(logger)

app.get("/", (req, res) => {
  return res.send("Home")
})

app.get("/about", (req, res) => {
  return res.send("about")
})

app.listen(5000, () => {
  console.log("server listening on port : 5000")
})
