const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/carousel', (req, res) => {
  res.json([
    'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/145890/40/3205/163228/5f110f7aE376b92b2/3b8f658999d0d781.jpg!cr_1125x445_0_171!q70.jpg.dpg',
    'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/138656/29/3645/128933/5f19355cE9655f498/b5c153a33e67da63.jpg!cr_1125x445_0_171!q70.jpg.dpg',
    'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/111483/20/11734/145229/5f03e131Ed3c8e731/771400694d8a9083.jpg!cr_1125x445_0_171!q70.jpg.dpg',
    'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/135686/12/4989/134541/5f15e079Eb64a151e/2650a6fd48690883.jpg!cr_1125x445_0_171!q70.jpg.dpg',
    'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/122607/13/7640/144479/5f17eeceE82da8f4c/dc736a6c6d8f22b2.jpg!cr_1125x445_0_171!q70.jpg.dpg',
    'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/115456/40/7331/100669/5ec3a9c6E3dcbadb7/46071c04455c0d5b.jpg!q70.jpg.dpg',
    'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/113411/9/12802/76324/5f13d862E413ec170/20d1e942c67832f5.jpg!cr_1125x445_0_171!q70.jpg.dpg',
    'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/135400/30/4939/147022/5f169a8cE10d055ed/529d0c5ea769e907.jpg!cr_1125x445_0_171!q70.jpg.dpg',
    'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/145890/40/3205/163228/5f110f7aE376b92b2/3b8f658999d0d781.jpg!cr_1125x445_0_171!q70.jpg.dpg',

  ]);
});

module.exports = router;
