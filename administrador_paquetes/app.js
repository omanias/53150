
/* function generarNroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const CANT_NROS = 10000;
const numeros = {};
for (let i = 0; i < CANT_NROS; i++) {
    const nro = generarNroAleatorio(1, 20);
    if (numeros[nro]) {
        numeros[nro]++;
    } else {
        numeros[nro] = 1;
    }
}
for (const numero in numeros) {
    console.log(`Número ${numero}: ${numeros[numero]} veces`);
} */


const fs = require("fs/promises")
const crypto = require("crypto")

class UserManager {
    constructor() {
        this.filePath = "./Usuarios.json"
    }

    async createUser(user) {
        const { nombre, apellido, username, password } = user

        //Hashear la contraseña
        const hashedPassword = crypto.createHash("sha256").update(password).digest("hex")

        try {
            //Cargar los usuarios desde un archivo
            let users = []
            if (await fs.access(this.filePath).then(() => true).catch(() => false)) {
                const fileContent = await fs.readFile(this.filePath, 'utf8')
                users = JSON.parse(fileContent)
            }

            users.push({ nombre, apellido, username, password: hashedPassword })

            await fs.writeFile(this.filePath, JSON.stringify(users, null, 2))
        } catch (error) {
            console.error("Error al crear un usuario", error)
        }
    }

    async validateUser(username, password) {
        try {
            //Cargar los datos del archivo
            if (await fs.access(this.filePath).then(() => true).catch(() => false)) {
                const fileContent = await fs.readFile(this.filePath, "utf8")
                const users = JSON.parse(fileContent)

                //Buscar usuarios por el username
                const user = users.find(u => u.username === username)

                if (user) {
                    //Verificar el password
                    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex')
                    if (hashedPassword === user.password) {
                        console.log("Usuario logueado con éxito")
                    } else {
                        console.log("Contraseña incorrecta")
                    }
                } else {
                    console.log("El usuario no fué encontrado")
                }
            } else {
                console.log("No hay usuarios registrados")
            }
        } catch (error) {
            console.error("Error de validación", error)
        }
    }
}


const userManager = new UserManager()

userManager.createUser({
    nombre: "Coder",
    apellido: "House",
    username: "coder24",
    password: "123456"
}).then(() => {
    userManager.validateUser("coder24", "12345678")
})

console.log(userManager)