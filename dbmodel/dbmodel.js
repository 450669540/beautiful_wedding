/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-18 16:02:43
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-02-19 11:02:19
 * @FilePath: /beautifu-wedding/dbmodel/dbmodel.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require('mongoose');

var db = require('../config/db.js');

// var Schema = mongoose.Schema;

// //商品表

// var AdvertisementsSchema = new Schema({
//   _id: { type: String }, //id

//   code: { type: String },

//   order: { type: Number }, //排序

//   url: { type: String }, //图片
// });

// const AdvertisementsModel = db.model('advertisements', AdvertisementsSchema);

// // 创建新文档
// const newAdvertisement = new AdvertisementsModel({
//   _id: '57656', // 手动指定_id值
//   code: 'HOME_BANNER',
//   url: 'http://127.0.0.1:5010/p2.png',
//   order: 2,
// });

// newAdvertisement
//   .save()
//   .then(() => console.log('Document saved successfully!'))
//   .catch((error) => console.error(error));
