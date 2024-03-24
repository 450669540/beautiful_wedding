/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-18 16:03:21
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-02-18 18:01:55
 * @FilePath: /beautifu-wedding/server/goods.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var db = require('../config/db.js');

const collection = db.collection('advertisements');

// 商品信息列表获取

exports.advertisementsGet = function (req, res) {
  collection
    .find({})
    .toArray()
    .then((res) => {
      // if (err) {
      //   console.log('查询失败', err);
      // } else {
      //   console.log('查询结果', res);
      // }
      console.log('查询结果', res);
    });
};
