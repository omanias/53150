import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/users.router.js'
import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.MONGO_URL)

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URL)
    .then(() => { console.log("Conectado a la base de datos") })
    .catch(error => console.error("Error en la conexion", error))

app.use('/api/users', userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port \PORT`)
})