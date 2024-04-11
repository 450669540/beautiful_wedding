/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-04-11 10:00:24
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-11 11:43:51
 * @FilePath: /beautiful-wedding/utils/uploadOssUtil.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const globalInfo = require('../config/info');
const OSS = require('ali-oss');

async function uploadFile(file) {
  let oldPath = file?.filepath; //这里的路径是图片的本地路径
  console.log(file?.filepath); //图片传过来的名字
  console.log(file?.newFilename); //图片传过来的名字

  // 配置你的OSS信息
  const client = new OSS({
    region: globalInfo?.ossRegion,
    accessKeyId: globalInfo?.ossAccessKeyId,
    accessKeySecret: globalInfo?.ossAccessKeySecret,
    bucket: globalInfo?.ossBucket,
    endpoint: globalInfo?.ossEndpoint,
  });

  try {
    // 上传文件
    const result = await client.put(file.newFilename, oldPath);
    console.log(result);
    return result;
  } catch (e) {
    console.error(e);
    return e;
  }
}

//   // 使用示例，file是一个包含图片二进制数据和文件名的对象
//   const file = {
//     originalname: 'example1_1.jpg',
//     buffer: Buffer.from([...]) // 图片的buffer
//   }
//   uploadFile(file).then(data => {
//     console.log('File uploaded:', data);
//   }).catch(error => {
//     console.error('Error uploading file:', error);
//   });

module.exports = {
  uploadFile,
};
