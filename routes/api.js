const express = require('express');
const router = express.Router();
const path = require('path');
const controllersBikeShop = require('../controllers/bike');

//Middleware to static file services 
router.use(express.static('public'));

router.get('/', (req, res) => {
  const monitor = path.join(__dirname, '../public/index.html');
  res.send(monitor);
});

//ApiRoutes
router.get('/api/stores', controllersBikeShop.getStores);

router.get('/api/categories', controllersBikeShop.getCategories);

router.get('/api/brands', controllersBikeShop.getBrands);

router.get('/api/search/:idStore/:idCategory/:idBrands', controllersBikeShop.searchSelect);

module.exports = router;
