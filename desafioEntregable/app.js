class ProductManager {
    constructor() {
        this.products = []
        this.nextId = 1
    }


    addProduct(product) {
        if (!this.isProductValid(product)) {
            console.log("Error: El producto no es válido")
            return
        }

        if (this.isCodeDuplicate(product.code)) {
            console.log("Error: El código del producto ya está en uso")
            return
        }

        product.id = this.nextId++
        this.products.push(product)
    }

    getProducts() {
        return this.products
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id)
        if (product) {
            return product
        } else {
            console.log("Error: Producto no encontrado")
        }
    }

    isProductValid(product) {
        return (
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        )
    }

    isCodeDuplicate(code) {
        return this.products.some((p) => p.code === code)
    }
}

const productManager = new ProductManager()

productManager.addProduct({
    title: "Producto A",
    description: "Descripción del producto A",
    price: 10.99,
    thumbnail: 'ruta/imagenA.jpg',
    code: 'P001',
    stock: 5
})


productManager.addProduct({
    title: "Producto B",
    description: "Descripción del producto B",
    price: 20.99,
    thumbnail: 'ruta/imagenB.jpg',
    code: 'P002',
    stock: 10
})

productManager.addProduct({
    title: "Producto C",
    description: "Descripción del producto C",
    price: '',
    thumbnail: 'ruta/imagenB.jpg',
    code: 'P004',
    stock: 10
})


const productos = productManager.getProducts()
const producto = productManager.getProductById(12)

console.log(producto)


