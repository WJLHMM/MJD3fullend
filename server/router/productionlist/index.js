const express = require('express');

const router = express.Router();

const productionlistRouter = require('./productionitem.js');

router.use('/', productionlistRouter);

module.exports = router;
