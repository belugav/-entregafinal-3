const ProductService = require('../services/products')

const product = new ProductService()

exports.addProduct = async (socket,producto) =>{
    try {
        const newProduct = await product.addProduct(producto);
        socket.emit('newProduct', newProduct);
    } catch (error) {
        console.log(error);
    }
}

exports.getAllProducts = async () =>{
    try {
        const allProducts = await product.getAllProducts();
        return allProducts;
    } catch (error) {
        console.log(error)
    }
}
