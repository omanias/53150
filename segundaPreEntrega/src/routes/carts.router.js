import { Router } from "express";

const router = Router();


router.delete("/carts/:cid/products/:pid ", (req, res) => {
    //deberá eliminar del carrito el producto seleccionado.
})

router.put("localhost:8080/carts/:cid", (req, res) => {
    // deberá actualizar el carrito con un arreglo de productos con el formato especificado anteriormente.
})

router.put("/carts/:cid/products/:pid", (req, res) => {
    // deberá actualizar la cantidad de un producto en el carrito.
})

router.delete("/carts/:cid", (req, res) => {
    // deberá eliminar los products del carrito seleccionado.
})

export default router;