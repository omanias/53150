const express = require("express")
const path = require("path")
const app = express()
const petsRouter = require("./routes/pets.router.js")
const usersRouter = require("./routes/users.router.js")

const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

app.use("/", petsRouter)
app.use("/", usersRouter)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})