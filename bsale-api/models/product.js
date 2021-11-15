const Sequelize = require('sequelize');
const sequelize = require('../utils/db/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  url_image: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  discount: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  category: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
});

module.exports = Product;