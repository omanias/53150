const express = require("express")
const router = express.Router()

const pets = []

router.get("/pets", (req, res) => {
    res.json(pets)
})

router.post("/pets", (req, res) => {
    const newPet = req.body
    pets.push(newPet)
    res.json({ message: "Mascota agregada" })
})

module.exports = router
