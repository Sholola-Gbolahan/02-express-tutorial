const express = require("express")

const app = express()

// Importing routes
const people = require("./routes/people")

// Server static assets
app.use(express.static("./methods-public"))

// Parse form data
app.use(express.urlencoded({ extended: false }))

// Parse JSON
app.use(express.json())

// Setting up base route for people
app.use("/api/people", people)

// Start the server
const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
