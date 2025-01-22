const express = require("express")
const { people } = require("./data")
const app = express()

// Static assets
app.use(express.static("./methods-public"))

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.listen(5000, () => {
  console.log("server listening on port : 5000")
})
