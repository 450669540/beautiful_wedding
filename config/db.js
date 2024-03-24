/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-18 16:01:32
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-03-24 21:31:54
 * @FilePath: /beautifu-wedding/config/db.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://127.0.0.1:27017/admin', {
  useNewUrlParser: true,

  useUnifiedTopology: true,

  //   useFindAndModify: false,
});

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.info('连接数据库成功');
});

module.exports = db;
