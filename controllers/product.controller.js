const productService = require('../services/product.service');

const productController = {
  addToCart: async (req, res) => {
    try {
      // get request user for user details
      const { name, price } = req.body;

      const userId = 1;
      const data = { userId, name, price };
      const addResponse = await productService.addToCart(data);

      const { statusCode, message } = addResponse;
      res.status(statusCode).json({
        success: true,
        data: {
          message: message,
        },
      });
    } catch (error) {
      // implement a logger using winston
      console.log(error);

      res.json({
        success: false,
        data: {
          message: error.message,
        },
      });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const getResponse = await productService.getAllProducts();

      const { statusCode, message, products } = getResponse;
      res.status(statusCode).json({
        success: true,
        data: {
          message: message,
          products: products,
        },
      });
    } catch (error) {
      // implement a logger using winston
      console.log(error);

      res.json({
        success: false,
        data: {
          message: error.message,
        },
      });
    }
  },
};

module.exports = productController;
