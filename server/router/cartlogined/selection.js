const express = require('express');

const router = express.Router();

/* GET cartlogined/selection page. */
router.get('/selection', (req, res) => {
  res.json([
      {
        10002787741: [
          { imgview: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/114769/9/12319/168411/5f0d1126Eb45debdc/a934fa6127e62a5b.jpg!q80.dpg.webp" },
          { price: "1849" },
          { productiondetail: "科龙(Kelon) 京品家电 1.5匹 风骑士 一级能效 智能控制 变频冷暖 静音 壁挂式空调挂机 KFR-35GW/FA1-A1" },
          { discount: "满1980减100" },
          { selected: "1.5匹，【风骑士一级智能空调】，1个" },
          { delivery: "北京天安门广场000号" },
          { sellername: "科龙空调京东自营旗舰店" },
          { isSelfsell: "京东自营" },
        ],
      },
      {
        100054014572: [
          { imgview: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/127399/27/8248/84646/5f22867dE9a61a9df/44f952e09d193cc9.jpg!q80.dpg.webp" },
          { price: "2899" },
          { productiondetail: "格力（GREE）正1.5匹 品悦一级能效 变频冷暖 智能 壁挂式卧室空调挂机 KFR-35GW/(35592)FNhAc-A1(WIFI)" },
          { discount: "购满1元格力产品返480元格力优惠券包" },
          { selected: "1.5匹，♥一级变频♥线下同款品悦，1个" },
          { delivery: "北京仓阳区广场000号" },
          { sellername: "格力京东自营旗舰店" },
          { isSelfsell: "京东自营" },
        ],
      },
      {
        100097987872: [
          { imgview: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/120359/31/8214/83497/5f1eb161E3d8347e5/e24ce25172ca0eea.jpg!q80.dpg.webp" },
          { price: "1499" },
          { productiondetail: "康佳（KONKA）1.5匹 挂机 快速冷暖 定速空调 隐藏显示屏LED 静音省电KFR-35GW/DKG03-E3" },
          { discount: "满1980减100" },
          { selected: "1.5匹，爆款定速挂机，1个" },
          { delivery: "上海陆家嘴" },
          { sellername: "康佳空调京东自营旗舰店" },
          { isSelfsell: "京东自营" },
        ],
      },
      {
        100092991930: [
          { imgview: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/126723/35/8254/70784/5f1eda1aEa6c63264/29f002f7f4272cb9.jpg!q80.dpg.webp" },
          { price: "1249" },
          { productiondetail: "云米（VIOMI）1匹 定频 冷暖 iCool 1F 速冷 智能除湿 壁挂式卧室空调挂机 KFRd-26GW/Y4PF2-D3" },
          { discount: "满1980减100" },
          { selected: "1个" },
          { delivery: "南京新街口" },
          { sellername: "云米智能京东自营旗舰店" },
          { isSelfsell: "京东自营" },
        ],
      },
      {
        100086577548: [
          { imgview: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/135222/27/5544/26058/5f1e9d7dE5674ab42/d233b7b5627c9f0c.jpg!q80.dpg.webp" },
          { price: "1489" },
          { productiondetail: "志高（CHIGO）1匹 定速冷暖  大风量 静音 壁挂式卧室空调挂机（NEW-GD9F1H3）" },
          { discount: "满1980减100" },
          { selected: "1匹 定速系列 1个" },
          { delivery: "广州天河广场" },
          { sellername: "志高空调京东自营旗舰店" },
          { isSelfsell: "京东自营" },
        ],
      },
      {
        1000974483945: [
          { imgview: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/136659/19/5429/132213/5f1ea6b6Ec9ae805a/f5bbb4e373d53351.jpg!q80.dpg" },
          { price: "998" },
          { productiondetail: "华凌冰箱 218升 三门冰箱 家用小冰箱 节能电冰箱小 宿舍租房必备节能静音冰箱 BCD-218TH" },
          { discount: "" },
          { selected: "【三门三温】218升节能静音三门，1个" },
          { delivery: "武汉天河国际机场" },
          { sellername: "华凌冰箱京东自营旗舰店" },
          { isSelfsell: "京东自营" },
        ],
      },
      {
        1000612826704: [
          { imgview: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/146114/17/3625/60626/5f194abeE57ba975c/d00dc06367ea6ee3.jpg!q80.dpg" },
          { price: "998" },
          { productiondetail: "TCL 201升 三门电冰箱 中门宽幅变温 小型冰箱 环保养鲜 冰箱小型便捷 节能静音（珍珠白）BCD-201TF1" },
          { discount: "满998元减100元" },
          { selected: "【居家优选】201升静音三门，1个" },
          { delivery: "兰州西固区" },
          { sellername: "TCL冰箱洗衣机京东自营旗舰店" },
          { isSelfsell: "京东自营" },
        ],
      },
      {
        1000127566807: [
          { imgview: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/125292/11/8203/59218/5f1e4a10E392d1d2f/7bc3234f08f365f3.jpg!q80.dpg" },
          { price: "698" },
          { discount: "" },
          { productiondetail: "康佳（KONKA）155升 双门冰箱 匀冷两门 家用小冰箱 节能电冰箱 保鲜静音 BCD-155C2GBU(瓷白)}" },
          { selected: "155L 小户型优选【行业爆款】，1个" },
          { delivery: "西安鼓楼区" },
          { sellername: "康佳冰箱洗衣机京东自营旗舰店" },
          { isSelfsell: "京东自营" },
        ],
      },
      {
        100054569969: [
          { imgview: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/129768/15/2953/80293/5ef325e2Eb43ffbf6/f60fd6213db7cadd.jpg!q80.dpg" },
          { price: "1098" },
          { productiondetail: "海信 (Hisense) 220升 三门电冰箱 中门软冷冻 小型家用冷藏冷冻 节能省电静音 琥珀金 BCD-220D/Q" },
          { discount: " 买冰洗品类满500元返空调&电视品类东券，额度满1500减100" },
          { selected: "【超级单品】220L二级节能大容量，1个" },
          { delivery: "天津开发区" },
          { sellername: "海信京东自营旗舰店" },
          { isSelfsell: "京东自营" },
        ],
      },
      {
        100029341632: [
          { imgview: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/112337/12/13172/31576/5f199643E6d1c7aca/d783714cbdb3254e.jpg!q80.dpg" },
          { price: "1379" },
          { productiondetail: "美的(Midea) 213升 三门三温家用冰箱冷藏冷冻大容量保鲜节能省电静音 BCD-213TM(E)" },
          { discount: "每满1000元，可减100元现金" },
          { selected: "213升精细分储不串味，1个" },
          { delivery: "苏州新区" },
          { sellername: "美的京东自营官方旗舰店" },
          { isSelfsell: "京东自营" },
        ],
      },
      {
        1000347782119: [
          { imgview: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/121867/40/5428/307140/5ef04ef0E6ad67d70/78bb3e02c5c012e5.jpg!q80.dpg" },
          { price: "2889" },
          { productiondetail: "联想(Lenovo)天逸510S 英特尔酷睿i3 个人商务台式机电脑整机(i3-9100 8G 1T WiFi 三年上门 Win10)21.5英寸" },
          { discount: "" },
          { selected: "21.5英寸，【九代酷睿】i3-9100 8G 1T，1个" },
          { delivery: "深圳南山区" },
          { sellername: "联想京东自营旗舰店" },
          { isSelfsell: "京东自营" },
        ],
      },
      {
        1000409635145: [
          { imgview: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/134599/11/4954/111549/5f16626cEdcb0b187/222190e73c5b14e5.jpg!q80.dpg" },
          { price: "2799" },
          { productiondetail: "戴尔(DELL)成就3681英特尔酷睿i3商用办公高性能台式电脑整机(十代i3-10100 8G 1T 三年上门售后)21.5英寸" },
          { discount: "" },
          { selected: "21.5英寸，十代新品爆款|i3 8G 1T，1个" },
          { delivery: "重庆朝天门" },
          { sellername: "硕扬DIY电脑旗舰店" },
          { isSelfsell: "" },
        ],
      },
      {
        1000544446410: [
          { imgview: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/137915/37/3569/396232/5f191216Ee3800a73/fdb5d2cccf793437.jpg!q80.dpg" },
          { price: "1649" },
          { productiondetail: "方正（iFound）T229 超薄一体机电脑 双核/四核/i3商务办公台式机 窄边框高清家用娱乐整机 【21.5特惠爆款】AMD A6/8G/120G" },
          { discount: "" },
          { selected: "【21.5特惠爆款】AMD A6/8G/120G，1个" },
          { delivery: "成都金牛区" },
          { sellername: "方正（ifound）电脑东星专卖店" },
          { isSelfsell: "" },
        ],
      },
      {
        1000737768787: [
          { imgview: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/134187/30/5695/500660/5f2287d2E17df027d/84b34f01fd3c0e7f.jpg!q80.dpg" },
          { price: "1599" },
          { productiondetail: "硕扬 intel十二线程强芯/GTX1050独显/16G内存/办公游戏台式电脑主机/DIY组装机全套" },
          { discount: "" },
          { selected: "1个" },
          { delivery: "杭州武林广场" },
          { sellername: "硕扬DIY电脑旗舰店" },
          { isSelfsell: "" },
        ],
      },
      {
        100042382794: [
          { imgview: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/114453/25/12115/292138/5f0bce2aE9f1353c6/4db91203668087e8.jpg!q80.dpg" },
          { price: "2889" },
          { productiondetail: "联想(Lenovo)天逸510S 十代英特尔酷睿i3 台式机电脑整机(i3-10100 8G 1T wifi win10 三年上门)21.5英寸" },
          { discount: "" },
          { selected: "21.5英寸，【十代酷睿】i3-10100 8G 1T，1个" },
          { delivery: "哈尔冰红太阳" },
          { sellername: "联想京东自营旗舰店" },
          { isSelfsell: "京东自营" },
        ],
      },
    ])
})
module.exports = router;
