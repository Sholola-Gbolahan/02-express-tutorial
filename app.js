const express = require("express")

const app = express()

// Importing routes for people
const people = require("./routes/people")

// importing routes for login
const auth = require("./routes/auth")

// Server static assets
app.use(express.static("./methods-public"))

// Setting up base route for people
app.use("/api/people", people)

// Setting up base route for people
app.use("/login", auth)

// Parse form data
app.use(express.urlencoded({ extended: false }))

// Parse JSON
app.use(express.json())

app.listen(5000, () => {
  console.log("server listening on port : 5000")
})
