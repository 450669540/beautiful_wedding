/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-19 11:06:45
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-02-20 10:39:49
 * @FilePath: /beautiful-wedding/dbmodel/advertisement/StudentSchema.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  _id: { type: String }, //id

  nick_name: { type: String }, //昵称

  sex: { type: Number }, //性别

  avatar: { type: String }, //头像

  open_id: { type: String }, //openId

  phone: { type: String }, //电话

  create_on: { type: Date }, //创建时间

  update_on: { type: Date }, //修改时间
});

module.exports = userSchema;
