const express = require('express');

const router = express.Router();

const selectionRouter = require('./selection.js');

router.use('/', selectionRouter);

module.exports = router;
