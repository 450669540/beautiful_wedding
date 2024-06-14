/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-19 11:06:45
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-06-14 14:58:26
 * @FilePath: /beautiful-wedding/dbmodel/advertisement/StudentSchema.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  _id: {
    type: String,
  },

  name: { type: String }, //模版名称

  cover: { type: String }, //封面

  type: { type: String }, //模版类型

  component_id: { type: String }, //组件JSON_ID

  page_id: { type: String }, // 模版页面JSON_ID

  create_on: { type: Date }, //创建时间

  update_on: { type: Date, required: false }, //修改时间

  create_name: { type: String }, //创建者

  update_name: { type: String, required: false }, //修改者

  image_count: { type: Number, default: 0 }, //图片数量

  used_count: { type: Number, default: 0 }, //模版使用次数

  start_on: { type: Date }, // 请柬时间

  address: { type: String }, //请柬地址

  lat: { type: Number, required: false }, // 经度

  lng: { type: Number, required: false }, //纬度

  title: { type: String }, //请柬标题

  hotel_name: { type: String, required: false }, //酒店名称

  orign_template_id: { type: String, required: false }, //原始模版id

  audio_path: { type: String, required: false }, //背景音乐url

  user_id: { type: String }, //用户id
});

module.exports = userSchema;
