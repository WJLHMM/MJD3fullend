const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
// const RedisStore = require('connect-redis')(session);
const ejs = require("ejs");
// 连接mongodb数据库
// require('./db/mongodb/mongodbcon.js')
// 连接redis数据库
// require('./db/redis/rediscon.js')

// global.client = client
// const { loggerWin } = require('./utils/expressWinston.js')

const indexRouter = require("./router");

const app = express();

app.set("views", "./views");
app.engine("html", ejs.__express);
app.set("view engine", "html");

// app.set('view engine','ejs')
app.use(express.static("static"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser(""));

app.use(
  session({
    secret: "vueExpress001", // 用来对session id相关的cookie进行签名
    saveUninitialized: true, // 是否自动保存未初始化的会话，建议trues
    resave: true, // 是否每次都重新保存会话，建议false
    cookie: {
      // httpOnly: false,//浏览器不允许脚本操作 document.cookie 去更改 cookie。设置为true可以避免被 xss 攻击拿到 cookie
      maxAge: 60 * 1000 * 60 * 24 * 30,
    },
    // store: new RedisStore({client})
  })
);

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:6100");
  // res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length,Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  // res.header("Content-Type", "application/json;charset=utf-8");
  res.header("Content-Type", "text/html;charset=utf-8");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/favicon.ico", (req, res) => res.status(204));
app.use("/api", indexRouter);

app.listen(6300, "127.0.0.1", () => {
  console.log("server start on http://localhost:6300");
});
