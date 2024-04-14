/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-19 11:06:45
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-14 14:01:52
 * @FilePath: /beautiful-wedding/dbmodel/advertisement/StudentSchema.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookRecordSchema = new Schema({
  _id: { type: String }, //id
  name: { type: String }, //礼金簿名称
  gift_money: { type: Number, default: 0 }, //礼金
  remark: { type: String, required: false }, //备注
  create_on: { type: Date }, //创建时间
  update_on: { type: Date }, //修改时间
  create_id: { type: String }, //创建人id
  update_id: { type: String }, //修改人id
  book_id: { type: String }, //礼金簿id
});

module.exports = bookRecordSchema;
