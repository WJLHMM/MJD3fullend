const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/secondkill', (req, res) => {
  res.json(
    [['https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/96266/27/19465/360586/5e9eb9e2Ea4c61c11/54fca6f5319fa28c.jpg.dpg',
      '599',
      '699'],
    ['https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/119111/11/13009/198157/5f17b022Ee0f34b4b/e5e24040e1ecff8b.jpg.dpg',
      '2737',
      '6699'],
    ['https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/117848/11/12822/176417/5f155c0fE060ef298/2b45b0f8c0e89311.jpg.dpg',
      '78.8',
      '99'],
    ['https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/122132/8/7685/52058/5f19273bE64baf6c6/ee3f4841bfb67b02.jpg.dpg',
      '2499',
      '2699'],
    ['https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/121566/8/7638/112006/5f1925e5Eadfb02f2/3d1eb0ddec502f52.jpg.dpg',
      '827',
      '1199'],
    ['https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/148608/25/3425/63980/5f16ac2aEd6fb5a85/b2653a3979611a57.png.webp',
      '4649',
      '5399'],
    ['https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/129715/32/5023/108902/5f17e70bEf84f8813/78dfec744437d51b.jpg.dpg',
      '3296',
      '4099'],
    ['https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/136195/26/5034/165238/5f18e13aEf5cc523a/cb4240563d00d684.jpg.dpg',
      '1599',
      '2199'],
    ['https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/134955/38/5084/52777/5f17f8fdE5e463d5c/abbdfe6a7029de75.jpg.dpg',
      '2599',
      '2799'],
    ['https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/134908/15/5099/176809/5f191957Ed2ab84d2/cc22a1c8bd0bec04.jpg.dpg',
      '3769',
      '4299']],

  );
});

module.exports = router;
