import express from 'express'
import cartsRouter from './routes/carts.router.js'
import productsRouter from './routes/products.router.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.log(err)
    }
    )

app.use('/api', cartsRouter)
app.use('/api', productsRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})