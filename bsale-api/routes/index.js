const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

/* GET home page. */

router.get('/', productController.get)
// router.get('/', function(req, res, next) {
//   res.status(200).json({
//     code: 200,
//     data: { },
//   });
// });

module.exports = router;
