/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-19 11:06:45
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-02-19 11:09:30
 * @FilePath: /beautiful-wedding/dbmodel/advertisement/StudentSchema.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var advertisementSchema = new Schema({
  _id: { type: String }, //id

  code: { type: String },

  order: { type: Number }, //排序

  url: { type: String }, //图片
});

module.exports = advertisementSchema;
