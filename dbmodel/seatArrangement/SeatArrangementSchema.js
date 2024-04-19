/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-19 11:06:45
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-19 11:05:00
 * @FilePath: /beautiful-wedding/dbmodel/advertisement/StudentSchema.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var seatArrangementSchema = new Schema({
  _id: { type: String }, //id
  template_id: { type: String }, //模版id
  template_name: { type: String }, //模版名称
  create_on: { type: Date }, //创建时间
  update_on: { type: Date }, //修改时间
  user_id: { type: String }, //创建人id
});

module.exports = seatArrangementSchema;
