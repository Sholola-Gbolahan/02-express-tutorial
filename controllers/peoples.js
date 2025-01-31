const { people } = require("../data")

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people })
}

const createPerson = (req, res) => {
  const { name } = req.body

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" })
  }
  res.status(201).json({ success: true, person: name })
}

const createPersonPostman = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "pls provide name value" })
  }

  res.status(201).json({ success: true, data: [...people, name] })
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
  const { id } = req.params

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, data: `no person with the id ${id}` })
  }

  const newPeople = people.filter((person) => person.id !== Number(id))

  console.log(newPeople)

  res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
  getPeople,
  createPerson,
  updatePerson,
  createPersonPostman,
  deletePerson,
}
