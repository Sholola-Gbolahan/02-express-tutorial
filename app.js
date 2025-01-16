const express = require("express")
const path = require("path")

const app = express()

// Setup static and middleware
// Static mean is a file server doesn't have to change
app.use(express.static('./public'))

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
})

app.all("*", (req, res) => {
  res.status(404).send("resource not found")
})

app.listen(5000, () => {
  console.log("Server is listen from  port : 5000")
})
