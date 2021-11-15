const Sequelize = require('sequelize');
const sequelize = require('../utils/db/database');

exports.get = async (req, res, next) => {
  try {
    const products = await sequelize.query('SELECT * FROM `product`');
    res.status(200).json({
      code: 200,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Something went wrong in the server.",
    });
  }
};