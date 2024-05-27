import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import multer from 'multer'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = 8080

//Crear carpeta "descargas"
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, './descargas'))
    },

    filename: (req, file, cb) => {
        const timestamp = Date.now()
        const originalname = file.originalname
        const ext = path.extname(originalname)
        cb(null, `${timestamp}-${originalname}`)
    }
})

const upload = multer({ storage })
app.use(express.static(path.join(__dirname, 'public')))

app.post("/upload", upload.single('archivo'), (req, res) => {
    res.json({ mensaje: "Archivo subido exitosamente" })
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})