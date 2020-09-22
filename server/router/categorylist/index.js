const express = require('express');

const router = express.Router();

const categorylistnavuiRouter = require('./categorylistnavui.js');
const categorybodyuiRouter = require('./categorybodyui.js');

router.use('/', categorylistnavuiRouter);
router.use('/', categorybodyuiRouter);

module.exports = router;
