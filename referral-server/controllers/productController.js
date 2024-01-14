const Product = require('../models/product')

const addNewProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body)
        const addedProduct = await Product.save()
        res.status(200).json({response: addedProduct})
    }catch(error){
        console.log('error while adding new product -> ', error.message)
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    addNewProduct
}