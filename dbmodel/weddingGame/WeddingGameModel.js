/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-19 11:05:42
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-14 14:13:42
 * @FilePath: /beautiful-wedding/dbmodel/advertisement/AdvertisementModel.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var db = require('../../config/db.js');
const bookRecordSchema = require('./BookRecordSchema.js');

let bookRecordModel = db.model('BookRecord', bookRecordSchema);

module.exports = bookRecordModel;
