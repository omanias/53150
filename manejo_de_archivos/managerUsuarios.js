const fs = require('fs').promises


class ManagerUsuarios {
    constructor() {
        this.usuariosFile = "Usuarios.json"
    }

    async crearUsuario(usuario) {
        try {
            let usuarios = await this.leerUsuarios()

            usuarios.push(usuario)
            await fs.writeFile(this.usuariosFile, JSON.stringify(usuarios, null, 2))
            console.log("Usuario creado correctamente")
        } catch (error) {
            console.error("Error al crear el usuario", error)
        }
    }

    async consultarUsuarios() {
        try {
            return await this.leerUsuarios()
        } catch (error) {
            console.error("Error al consultar usuarios", error)
            return []
        }
    }

    async leerUsuarios() {
        try {
            const data = await fs.readFile(this.usuariosFile, 'utf8')
            return JSON.parse(data)
        } catch (error) {
            if (error.code === 'ENOENT') {
                return []
            } else {
                throw error
            }
        }
    }
}

module.exports = ManagerUsuarios