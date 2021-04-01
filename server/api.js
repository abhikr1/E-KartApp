const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const users = require('./routes/users');
const sessions = require('./routes/sessions');

const products = require('./routes/products');

const category = require('./routes/category');

const cart = require('./routes/cart');

const orders = require('./routes/orders');
// Add json and urlencoded middleware

router.use('/users', users);

router.use('/sessions', sessions);

router.use('/products', products);

router.use('/category', category);

router.use('/cart', cart);

router.use('/orders', orders)
module.exports = router;