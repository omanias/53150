import { Router } from "express";
import productModel from "../models/product.model.js";

const router = Router();

router.get('/products', async (req, res) => {
    let { limit = 10, page = 1, sort, query } = req.query;
    limit = parseInt(limit);
    page = parseInt(page);

    try {
        // Construir filtro de búsqueda
        let filter = {};
        if (query) {
            // Buscar por categoría o disponibilidad
            filter = {
                $or: [
                    { category: query },
                    { available: query.toLowerCase() === 'true' } // Comparar como booleano
                ]
            };
        }

        // Opciones de sorteo
        let sortOptions = {};
        if (sort) {
            sortOptions.price = sort === 'asc' ? 1 : -1;
        }

        // Obtener el total de productos que coinciden con el filtro
        const totalProducts = await productModel.countDocuments(filter);

        // Calcular la paginación
        const totalPages = Math.ceil(totalProducts / limit);
        const offset = (page - 1) * limit;

        // Obtener productos paginados
        const products = await productModel.find(filter)
            .sort(sortOptions)
            .skip(offset)
            .limit(limit);

        // Construir la respuesta
        const response = {
            status: "success",
            payload: products,
            totalPages,
            prevPage: page > 1 ? page - 1 : null,
            nextPage: page < totalPages ? page + 1 : null,
            page,
            hasPrevPage: page > 1,
            hasNextPage: page < totalPages,
            prevLink: page > 1 ? `/products?limit=${limit}&page=${page - 1}&sort=${sort || ''}&query=${query || ''}` : null,
            nextLink: page < totalPages ? `/products?limit=${limit}&page=${page + 1}&sort=${sort || ''}&query=${query || ''}` : null
        };

        res.json(response);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
});


router.post('/products', async (req, res) => {
    try {
        const product = new productModel(req.body);
        await product.save();
        res.json({ status: "success", payload: product });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
});


export default router;