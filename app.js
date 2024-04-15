/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-18 13:54:15
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-15 17:42:09
 * @FilePath: /beautifu-wedding/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const session = require('express-session');

const bodyParser = require('body-parser');
const path = require('path');

const useRouter = require('./router/index.js');
const useUserRouter = require('./router/user.js');
const useElectronicInvitationRouter = require('./router/electronicInvitation.js');
const useCommentRouter = require('./router/comment.js');
const useGiftBookRouter = require('./router/giftStatistics.js');

require('./config/db.js');
require('./dbmodel/advertisement/AdvertisementSchema.js');
require('./dbmodel/advertisement/AdvertisementModel.js');

const app = express();
const port = 8080;
app.use(
  session({
    secret: 'beautifulWedding', // secret  属性的值可以为任意字符串
    resave: false, //强制保存session即使他没有什么变化
    saveUninitialized: true, //强制将来初始化的session存储
    cookie: {
      //session是基于cookie的，所以可以在配置session的时候配置cookie|
      maxAge: 1000 * 60, //设置过期时间
      secure: false, //true的话表示只有https协议才能访问cookie
    },
  })
);
//处理post数据的提交
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 配置静态资源路径
app.use(express.static(path.join(__dirname, 'data')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'upload')));
// 解决跨域

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Headers', 'Content-Type');

  res.header('Access-Control-Allow-Methods', '*');

  res.header('Content-Type', 'application/json;charset=utf-8');

  next();
});

app.use(useRouter);
app.use(useUserRouter);
app.use(useElectronicInvitationRouter);
app.use(useCommentRouter);
app.use(useGiftBookRouter);
// session 中间件

app.listen(port, () => console.log(`服务器启动成功，端口号为： ${port}!`));
