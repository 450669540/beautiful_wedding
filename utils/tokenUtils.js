/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-04-18 10:16:36
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-18 10:24:14
 * @FilePath: /beautiful-wedding/utils/tokenUtils.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const jwt = require('jsonwebtoken');
const info = require('./../config/info');

//验证Token
function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, info?.tokenSecretKey, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = { verifyToken };
