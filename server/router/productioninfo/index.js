const express = require('express');

const router = express.Router();

const productioninfoRouter = require('./productioninfo.js');

router.use('/', productioninfoRouter);

module.exports = router;
