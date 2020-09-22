const express = require('express');

const router = express.Router();

const djxyadvRouter = require('./djxyadv.js');
const carouselRouter = require('./carousel.js');
const advlinkRouter = require('./advlink.js');
const dailyshopRouter = require('./dailyshop.js');
const gridRouter = require('./grid.js');
const secondkillRouter = require('./secondkill.js');
const recommendadvRouter = require('./recommendadv.js');

router.use('/', djxyadvRouter);
router.use('/', carouselRouter);
router.use('/', advlinkRouter);
router.use('/', dailyshopRouter);
router.use('/', gridRouter);
router.use('/', secondkillRouter);
router.use('/', recommendadvRouter);

module.exports = router;
