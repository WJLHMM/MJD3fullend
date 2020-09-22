const express = require('express');

const router = express.Router();

/* GET home page djxyadv data. */
router.get('/dailyshop', (req, res) => {
  res.json([
    ['https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/52252/35/10516/124064/5d7808e0E46202391/7100f3733a1c1f00.jpg!q70.jpg.dpg',
      '品质生活',
      '讲究是一种生活态度'],
    ['https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/106720/5/6864/102152/5df64dd3E54ef6db2/17cc73b43ad6538d.jpg!q70.jpg.dpg',
      '减脂瘦身',
      '健身一路相伴'],
    ['https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/120048/16/7782/223945/5f190947Ec2e302bf/81ca20e387dfe60e.jpg!q70.jpg.dpg',
      '男得好货',
      '高颜值好货'],
    ['https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/144175/40/1462/251920/5ef318d9Eb773b607/df74d9eb08af8750.png!q70.jpg.dpg',
      '客厅焕新',
      '开门迎客'],
    ['https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/111165/13/4580/154802/5eae7b9aEe1fbe4f0/7166e678e91cfaba.jpg!q70.jpg.dpg',
      '租房贵族',
      '拎包入住'],
    ['https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/110814/20/15966/94217/5f1a9a5bE8000b9f9/8392e5dfc6cf32c9.jpg!q70.jpg.dpg',
      '4K高清',
      '品质电视'],
    ['https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/133304/8/3850/118158/5f044555E4d0449dc/0d9ae8dd50e133a1.jpg!q70.jpg.dpg',
      '免息星球',
      '白条免息购'],
    ['https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/99201/7/19435/145063/5e9d55b1E69a12749/ae6673330a8e82f2.jpg!q70.jpg.dpg',
      '每日特价',
      '9块9疯抢'],
    ['https://m.360buyimg.com/n1/s150x150_jfs/t29566/227/1464891645/10350/a5b133e2/5ce20cdcNd9cdd972.jpg!q70.jpg.dpg',
      '品牌闪购',
      '汇大牌好价'],
    ['https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/89676/29/5758/20628/5def37a2Eff165a1c/b41fe7c9ac32f16f.jpg!q70.jpg.dpg',
      '京东直播',
      '边看边买'],
    ['https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/88638/33/5675/28468/5def3b04E728e691f/8997a8bf07db66b7.png!q70.jpg.dpg',
      '排行榜',
      '热销推荐'],
    ['https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/80435/12/13755/37856/5daeb76bEc10eb013/177eb658079595d1.jpg!q70.jpg.dpg',
      '拍拍好物',
      '二手优品'],
    ['https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/56939/39/1210/59272/5cefa52dE2f70588a/3174a20e743edd49.png!q70.jpg.dpg',
      '新品首发',
      '京东小魔方'],
    ['https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/34938/26/11155/70774/5cefa0c6E5a90edb2/47b686712510d44e.png!q70.jpg.dpg', '发现好货', '发现品质生活'],
  ]);
});

module.exports = router;
