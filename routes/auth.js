const express = require("express")

const router = express.Router()

// Login route
router.post("/", (req, res) => {
  console.log(req.body) // Debugging: Check incoming request body
  const { name } = req.body

  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send("Please Provide Credential")
})

module.exports = router
