const express = require("express")
const { people } = require("./data")
const app = express()

// Static assets
app.use(express.static("./methods-public"))

// parse form data
app.use(express.urlencoded({ extended: false }))

// parse json
app.use(express.json())

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.post("/api/people", (req, res) => {
  const { name } = req.body

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" })
  }
  res.status(201).json({ success: true, person: name })
})

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "pls provide name value" })
  }

  res.status(201).json({ success: true, data: [...people, name] })
})

// Updating Name
app.put("/api/people/:id", (req, res) => {
  // getting a particular data
  const { id } = req.params
  // getting value to update
  const { name } = req.body

  // checking if selected person id exit
  const person = people.find((person) => person.id === Number(id))
  // Returning error message if person not exit
  if (!person) {
    return res
      .status(404)
      .json({ success: false, data: `no person with id ${id}` })
  }

  // Creating a new list of people with the updated value
  const newPeople = people.map((person) => {
    // Updating any of the value that matches id
    if (person.id === Number(id)) {
      person.name = name
    }
    // return each list
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

app.post("/login", (req, res) => {
  console.log(req.body)
  const { name } = req.body

  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send("Please Provide Credential")
})

app.listen(5000, () => {
  console.log("server listening on port : 5000")
})
