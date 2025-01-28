const express = require("express")

const app = express()

// Importing routes for people
const people = require("./routes/people")

// importing routes for login
const auth = require("./routes/auth")

// Server static assets
app.use(express.static("./methods-public"))

// Parse form data
app.use(express.urlencoded({ extended: false }))

// Parse JSON
app.use(express.json())

// Setting up base route for people
app.use("/api/people", people)

app.use("/login", auth)

// Start the server
const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
