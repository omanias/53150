import { Router } from 'express';
import fs from 'fs';

const router = Router();

// Ruta para crear un nuevo carrito
router.post('/carts', (req, res) => {
    const { id, products } = req.body;
    if (id && products) {
        // Escribir el carrito en el archivo "carrito.json"
        fs.readFile('carrito.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            const carts = JSON.parse(data);
            carts.push({ id, products });
            fs.writeFile('carrito.json', JSON.stringify(carts, null, 2), err => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
                res.json({ id, products });
            });
        });
    } else {
        res.status(400).json({ error: 'id and products are required' });
    }
});

// Ruta para obtener un carrito por su ID
router.get('/carts/:cid', (req, res) => {
    const id = req.params.cid;
    // Leer el archivo "carrito.json"
    fs.readFile('carrito.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        const carts = JSON.parse(data);
        const cart = carts.find(cart => cart.id === id);
        if (cart) {
            res.json(cart);
        } else {
            res.status(404).json({ error: 'Cart not found' });
        }
    });
});

// Ruta para agregar un producto a un carrito
router.post('/:cid/product/:pid', (req, res) => {
    const cartId = req.params.cid;
    const productId = req.params.pid;
    const productToAdd = {
        product: productId,
        quantity: 1
    };
    // Leer el archivo "carrito.json"
    fs.readFile('carrito.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        const carts = JSON.parse(data);
        const cartIndex = carts.findIndex(cart => cart.id === cartId);
        if (cartIndex !== -1) {
            carts[cartIndex].products.push(productToAdd);
            // Escribir los cambios en el archivo "carrito.json"
            fs.writeFile('carrito.json', JSON.stringify(carts, null, 2), err => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
                res.status(200).json({ message: 'Product added to cart successfully' });
            });
        } else {
            res.status(404).json({ error: 'Cart not found' });
        }
    });
});

export default router;
