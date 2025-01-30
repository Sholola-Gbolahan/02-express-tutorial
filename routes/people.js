const express = require("express")
const router = express.Router()

const {
  getPeople,
  createPerson,
  updatePerson,
  createPersonPostman,
  deletePerson,
} = require("../controllers/peoples")

router.get("/", getPeople)

router.post("/", createPerson)

router.post("/postman", createPersonPostman)

// Updating Name
router.put("/:id", updatePerson)
router.delete("/:id", deletePerson)

module.exports = router
