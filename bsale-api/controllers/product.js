const Product = require('../models/product');

exports.get = async (req, res, next) => {
  try {
    const data = await Product.findAll();

    res.status(200).json({
      code: 200,
      data,
    });
  } catch (error) {
    console.log('[ error ] > ', error);
    res.status(500).json({
      code: 500,
      message: "Something went wrong in the server.",
    });
    next();
  }
};