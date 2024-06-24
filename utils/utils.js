/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-06-24 14:28:26
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-06-24 14:29:36
 * @FilePath: /beautiful-wedding/utils/utils.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const jsonStringify = (arr) => {
  let s = JSON.stringify(arr, function (k, v) {
    if (typeof v === 'funtion') {
      return v + '';
    }
    return v;
  });
  return s;
};
module.exports = {
  jsonStringify,
};
