const express = require('express');
const router = express.Router();
const controllersBikeShop = require('../controllers/bike');

router.get('/', (req, res) => {
  res.send('Todo ok');
});

router.get('/api/stores', controllersBikeShop.getStores);

router.get('/api/categories', controllersBikeShop.getCategories);

router.get('/api/brands', controllersBikeShop.getBrands);

module.exports = router;
