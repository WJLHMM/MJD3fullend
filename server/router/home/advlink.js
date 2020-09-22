const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/advlink', (req, res) => {
  res.json({
    advlinktag1: [
      { imgsrc1: 'https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg' },
      { imgsrc2: 'https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg' },
    ],
    advlinktag2: [
      { imgsrc1: 'https://m.360buyimg.com/mobilecms/s750x100_jfs/t1/111655/4/10853/142323/5ef22455Eb86abfc1/2bf122bb2e87d6e3.png.webp' },
    ],
    advlinktag3: [
      { imgsrc1: 'https://m.360buyimg.com/mobilecms/s750x200_jfs/t1/117072/7/12300/77560/5f0c4bf3E8e55bbea/b27192bb28e7323a.png.webp' },
    ],
  });
});

module.exports = router;
