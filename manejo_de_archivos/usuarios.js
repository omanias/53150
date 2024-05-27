const ManagerUsuarios = require('./managerUsuarios.js')

const manager = new ManagerUsuarios()

//Crear un nuevo usuario
manager.crearUsuario({
    Nombre: "Pablo",
    Apellido: "Gauna",
    Edad: 38,
    Curso: "Programación Backend"
})

//Consultar usuarios
manager.consultarUsuarios()
    .then(usuarios => console.log('Usuarios', usuarios))
    .catch(error => console.error("Error al consultar usuarios", error))