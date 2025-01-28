const express = require("express")
const router = express.Router()
const { people } = require("../data")

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people })
})

router.post("/", (req, res) => {
  const { name } = req.body

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" })
  }
  res.status(201).json({ success: true, person: name })
})

router.post("/postman", (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "pls provide name value" })
  }

  res.status(201).json({ success: true, data: [...people, name] })
})

// Updating Name
router.put("/:id", (req, res) => {
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

module.exports = router
