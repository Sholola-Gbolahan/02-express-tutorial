const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.json([
    {
      name: 'John',
    },
    {
      name: 'Susan'
    },
  ])
})



app.listen(5000, () => {
  console.log("server listening on port : 5000")
})
