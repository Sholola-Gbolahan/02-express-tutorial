const express = require("express")
const { products } = require("./data")

const app = express()
//  req => middleware => res

app.get("/", (req, res) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)

  return res.send("Home")
})

app.get("/about", (req, res) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  return res.send("about")
})

app.listen(5000, () => {
  console.log("server listening on port : 5000")
})
