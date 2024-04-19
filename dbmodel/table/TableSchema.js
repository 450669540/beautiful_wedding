/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-19 11:06:45
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-19 13:26:49
 * @FilePath: /beautiful-wedding/dbmodel/advertisement/StudentSchema.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tableSchema = new Schema({
  _id: { type: String }, //id
  table_no: { type: String }, //礼金簿名称
  guest_names: { type: String }, //宾客名称,以,拼接
  seat_id: { type: String }, //排座表id
  create_on: { type: Date }, //创建时间
  update_on: { type: Date }, //修改时间
  user_id: { type: String }, //创建人id
});

module.exports = tableSchema;
