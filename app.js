const express = require("express")
const { products } = require("./data")
const logger = require("./logger")
const authorize = require("./authorize")
const morgan = require("morgan")

const app = express()
//  req => middleware => res
// app.use([logger, authorize])

// app.use(express.static("./public"))

app.use(morgan("tiny"))

app.get("/", (req, res) => {
  return res.send("Home")
})

app.get("/about", (req, res) => {
  return res.send("about")
})

app.get("/api/products", (req, res) => {
  return res.send("Products")
})

app.get("/api/items", (req, res) => {
  console.log(req.user)

  return res.send("Items")
})

app.listen(5000, () => {
  console.log("server listening on port : 5000")
})
