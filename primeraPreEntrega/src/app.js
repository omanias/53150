import express from 'express'
import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', productsRouter)
app.use('/api', cartsRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
