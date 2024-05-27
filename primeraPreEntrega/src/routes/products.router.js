import { Router } from 'express';
import fs from 'fs';

const router = Router();

// Ruta para leer todos los productos
router.get('/products', (req, res) => {
    // Lee el archivo "productos.json"
    fs.readFile('productos.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        const products = JSON.parse(data);
        const limit = req.query.limit;
        if (limit) {
            res.json(products.slice(0, limit));
        } else {
            res.json(products);
        }
    });
});

// Ruta para leer un producto por su ID
router.get('/products/:pid', (req, res) => {
    const id = req.params.pid;
    // Lee el archivo "productos.json"
    fs.readFile('productos.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        const products = JSON.parse(data);
        const product = products.find(product => product.id === parseInt(id));
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    });
});

// Ruta para agregar un nuevo producto
router.post('/products', (req, res) => {
    const { title, description, code, price, status, stock, category } = req.body;
    // Lee el archivo "productos.json"
    fs.readFile('productos.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        const products = JSON.parse(data);
        const id = products.length + 1;
        const newProduct = { id, title, description, code, price, status, stock, category };
        products.push(newProduct);
        // Escribe los productos actualizados en el archivo "productos.json"
        fs.writeFile('productos.json', JSON.stringify(products, null, 2), err => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.json(newProduct);
        });
    });
});


export default router;
