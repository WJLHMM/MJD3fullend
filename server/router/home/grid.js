const express = require('express');

const router = express.Router();

/* GET home page djxyadv data. */
router.get('/grid', (req, res) => {
  res.json(
    [
      {
        京东超市:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png.webp',
      },
      {
        数码电器:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png.webp',
      },
      {
        京东服饰:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png.webp',
      },
      {
        京东生鲜:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png.webp',
      },
      {
        京东到家:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png.webp',
      },
      {
        充值缴费:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png.webp',
      },
      {
        '9.9元拼':
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/143365/25/1824/3716/5efbf3c0E5175e1fb/88f6227257a29f1d.png.webp',
      },
      {
        领券:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp',
      },
      {
        借钱:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/129184/28/5977/3711/5efbf53aE2c2e6a07/7db529ce0e00838f.png.webp',
      },
      {
        PLUS会员:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/123730/37/5924/4189/5efbf567E0a226121/d04df7c74c87cf68.png.webp',
      },
      {
        京东国际:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/142596/7/1864/4759/5efbf5a9E60c62b8a/49cdd24cb2bfecf5.png.webp',
      },
      {
        京东拍卖:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125193/15/5993/3443/5efbf5dbEa3327124/a4282d5cb2879c8b.png.webp',
      },
      {
        唯品会:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/133947/24/3428/4213/5efbf625E7e1b4e98/95fda84d8748f88d.png.webp',
      },
      {
        玩3C:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/145692/9/1817/4493/5efbf652E61c4f3ec/722840c121d67fc6.png.webp',
      },
      {
        沃尔玛:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/118396/30/11271/2692/5efbf680Eb3a3cf32/c3e85c4d99746400.png.webp',
      },
      {
        美妆馆:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/123571/19/6008/3747/5efbf6b2E03153a36/9ddc9036ba1c11a1.png.webp',
      },
      {
        京东旅行:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/115003/18/11199/3519/5efbf6eaEe59cb7f6/dab44230606cd112.png.webp',
      },
      {
        拍拍二手:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/142258/17/1800/4509/5efbf70aEb23e164e/61aaea8fe5221081.png.webp',
      },
      {
        物流查询:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/116056/30/11288/4223/5efbf753Ee7cf2cd7/3977b5fe42b136e4.png.webp',
      },
      {
        全部:
               'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/112559/35/11283/3523/5efbf774E285d108b/c0fa626df4979a21.png.webp',
      },

    ],
  );
});

module.exports = router;
