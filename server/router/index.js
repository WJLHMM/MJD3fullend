const express = require('express');

const router = express.Router();
/* GET home page. */
const homeRouter = require('./home');
const categorylistRouter = require('./categorylist');
const cartloginedRouter = require('./cartlogined');
const productionlistRouter = require('./productionlist');
const productioninfoRouter = require('./productioninfo');

router.get('/', (req, res) => {
  res.render('index/index');
});

router.use('/home', homeRouter);
router.use('/categorylist', categorylistRouter);
router.use('/cartlogined', cartloginedRouter);
router.use('/productionlist', productionlistRouter);
router.use('/productioninfo', productioninfoRouter);

module.exports = router;
