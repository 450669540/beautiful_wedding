/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-19 11:06:45
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-18 10:52:33
 * @FilePath: /beautiful-wedding/dbmodel/advertisement/StudentSchema.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var weddingGameSchema = new Schema({
  _id: { type: String }, //id
  number: { type: Number }, //抽取数
  game_names: { type: String }, //游戏列表,分隔
  create_on: { type: Date }, //创建时间
  update_on: { type: Date }, //修改时间
  create_id: { type: String }, //创建人id
});

module.exports = weddingGameSchema;
