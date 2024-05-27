/* const http = require('http')


const server = http.createServer((request, response) => {
    response.end("¡Mi primer hola mundo desde backend!")
})

server.listen(8080, () => {
    console.log("Servidor corriendo en puerto 8080")
}) */

const express = require("express")
const app = express()
const PORT = 8080
app.use(express.urlencoded({ extended: true }))
//Endpoint
/* app.get('/bienvenida', (req, res) => {
    //logica
    const respuesta = `<p style="color:blue">Bienvenida del server</p>`
    res.send(respuesta)
})

app.get('/usuario/:id', (req, res) => {
    const user = {
        nombre: "Coder",
        email: "coder@house.com"
    }
    res.json(user)
}) */

/* app.get("/parametro/:nombre", (req, res) => {
    console.log(req.params.nombre)
    res.send(`Bienvenido, ${req.params.nombre}`)
})
app.get("/parametro2/:nombre/:apellido", (req, res) => {
    res.send(`Bienvenido, ${req.params.nombre} ${req.params.apellido}`)
}) */


/* const usuarios = [
    { id: "1", nombre: "usuario A", apellido: "apellido usuario A", email: "usuarioA@mail.com" },
    { id: "2", nombre: "usuario B", apellido: "apellido usuario B", email: "usuarioB@mail.com" },
    { id: "3", nombre: "usuario C", apellido: "apellido usuario C", email: "usuarioC@mail.com" }
] */

/* app.get("/", (req, res) => {
    res.send(usuarios)
})
 */

/* app.get('/:idUsuario', (req, res) => {
    let idUsuario = req.params.idUsuario
    let usuario = usuarios.find(u => u.id === idUsuario)
    if (!usuario) return res.send({ error: "Usuario no encontrado" })
    res.send(usuario)
}) */


app.get('/query', (req, res) => {
    let consulta = req.query

    let { nombre, apellido, email } = req.query

    res.send(consulta)
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})