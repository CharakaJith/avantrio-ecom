const express = require('express');
const routesV1 = express.Router();
const productRoutes = require('./product.routes');

routesV1.use('/product', productRoutes);

module.exports = routesV1;
