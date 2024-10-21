const express = require('express');
const productController = require('../../controllers/product.controller');

const productRouter = express.Router();

productRouter.post('/', productController.addToCart);
productRouter.get('/', productController.getAllProducts);

module.exports = productRouter;
