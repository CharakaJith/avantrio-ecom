const { SHOPPING_CART } = require('../mock/shoppintCart.mock');
const { PRODUCTS } = require('../mock/products.mock');

const productService = {
  addToCart: async (data) => {
    const { userId, name, price } = data;

    // TODO: add validations here

    const itemId = SHOPPING_CART.length;

    // add to cart
    const itemDetails = {
      itemId: itemId,
      userId: userId,
      name: name,
      price: price,
    };
    SHOPPING_CART.push(itemDetails);

    return {
      statusCode: 201,
      message: 'Item added!',
    };
  },

  getAllProducts: async () => {
    return {
      statusCode: 200,
      message: 'Products fetched!',
      products: PRODUCTS,
    };
  },
};

module.exports = productService;
