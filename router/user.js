/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-19 13:51:24
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-15 17:27:55
 * @FilePath: /beautiful-wedding/router/user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');
const lodash = require('lodash');
const axios = require('axios');
const uuid = require('uuid');
const info = require('./../config/info');
const userOperate = require('../dbmodel/user/operate');
const { uploadFile } = require('../utils/uploadOssUtil');

const router = express.Router();

router.post('/login', async (req, res) => {
  // 获取从客户端上传上来的key
  try {
    let { code } = req.body;
    let { appId, secret } = info;
    let openid;
    if (!code) {
      return Promise.reject('没有code参数');
    }
    console.log('app信息', appId, secret, code);
    await axios
      .get('https://api.weixin.qq.com/sns/jscode2session', {
        params: {
          appid: appId,
          secret: secret,
          js_code: code,
          grant_type: 'authorization_code',
        },
      })
      .then((response) => {
        if (response.data.errcode) {
          return Promise.reject('非法的用户凭证');
        }
        openid = response.data.openid;
      });
    let userinfo = await searchUserOpenId(openid);
    if (userinfo) {
      if (!userinfo?.user_no) {
        console.log('没有user_no');
        const userNo =
          new Date().getTime().toString(36).substr(2, 4) +
          Math.random().toString(36).substr(2, 4);
        userinfo = await userOperate.update(
          { open_id: userinfo?.open_id },
          { user_no: userNo }
        );
      }
      req.session.user = userinfo; // 将用户信息存储到session中
      req.session.islogin = true; // 将用户的登录状态存储到session中
      res.send({
        msg: 'get请求成功',
        code: 1,
        success: true,
        data: userinfo?.[0],
      });
    } else {
      console.log('创建新用户');
      const userNo =
        new Date().getTime().toString(36).substr(2, 4) +
        Math.random().toString(36).substr(2, 4);

      // 创建用户
      let creatUserinfoStatus = await userOperate?.create({
        _id: uuid.v4(),
        nick_name: '',
        open_id: openid,
        avatar: '',
        sex: 0,
        phone: '',
        create_on: new Date(),
        update_on: new Date(),
        user_no: lodash.toUpper(userNo),
      });
      // session 中间件
      req.session.user = creatUserinfoStatus?.[0]; // 将用户信息存储到session中
      req.session.islogin = true; // 将用户的登录状态存储到session中
      res.send({
        msg: 'get请求成功',
        code: 1,
        success: true,
        data: creatUserinfoStatus,
      });
    }
  } catch (err) {
    // 用户没有被创建等...
    console.log('err', err);
    res.send({ msg: err || '请检查网络环境', success: false });
  }
});

router.post('/logout', async (req, res) => {
  req.session.user = undefined;
  req.session.islogin = false; // 将用户的登录状态存储到session中
  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data: true,
  });
});

router.get('/getUserInfo', async (req, res) => {
  let userinfo = await searchUserOpenId(req?.session?.user?.open_id);

  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data: userinfo,
  });
});

router.get('/getUserInfoByIds', async (req, res) => {
  let { ids } = req.query;
  console.log('ids', ids?.split(','));
  const data = await userOperate.find({
    _id: { $in: ids?.split(',') },
  });

  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.get('/getUserInfoByUserNo', async (req, res) => {
  let { user_no } = req.query;

  const data = await userOperate.findOne({ user_no });

  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.post('/updateUserInfo', async (req, res) => {
  let { nick_name, avatar } = req.body;
  const data = await userOperate.update(
    { open_id: req?.session?.user?.open_id },
    { nick_name, avatar }
  );
  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.get('/deleteUserInfo', async (req, res) => {
  const query = req.query;
  const data = await userOperate.deleteData('deleteOne', {
    open_id: query.open_id,
  });
  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

/** 上传头像 */
router.post('/uploadAvatar', async (req, res) => {
  // var form = new formidable.IncomingForm();
  // var uploadDir = path.join(__dirname, '../upload/');
  // form.uploadDir = uploadDir; //本地文件夹目录路径

  // form.parse(req, (err, fields, files) => {
  //   console.log('文件', files?.fileData?.[0]?.filepath);
  //   let oldPath = files?.fileData?.[0]?.filepath; //这里的路径是图片的本地路径
  //   console.log(files?.fileData?.[0]?.newFilename); //图片传过来的名字
  //   let newPath = path.join(
  //     path.dirname(oldPath),
  //     files?.fileData?.[0]?.newFilename
  //   );
  //   //这里我传回一个下载此图片的Url
  //   var downUrl = info.baseUrl + '/' + files?.fileData?.[0]?.newFilename; //这里是想传回图片的链接
  //   fs.rename(oldPath, newPath, () => {
  //     //fs.rename重命名图片名称
  //     res.send({
  //       msg: 'get请求成功',
  //       code: 1,
  //       success: true,
  //       data: downUrl,
  //     });
  //   });
  // });

  var form = new formidable.IncomingForm();
  var uploadDir = path.join(__dirname, '../upload/');
  form.uploadDir = uploadDir; //本地文件夹目录路径

  form.parse(req, (err, fields, files) => {
    console.log('文件', files?.fileData?.[0]?.filepath);
    //let oldPath = files?.fileData?.[0]?.filepath; //这里的路径是图片的本地路径
    //console.log(files?.fileData?.[0]?.newFilename); //图片传过来的名字
    // let newPath = path.join(
    //   path.dirname(oldPath),
    //   files?.fileData?.[0]?.newFilename
    // );
    // //这里我传回一个下载此图片的Url
    // var downUrl = info.baseUrl + '/' + files?.fileData?.[0]?.newFilename; //这里是想传回图片的链接
    // fs.rename(oldPath, newPath, () => {
    //   //fs.rename重命名图片名称
    //   res.send({
    //     msg: 'get请求成功',
    //     code: 1,
    //     success: true,
    //     data: downUrl,
    //   });
    // });
    uploadFile(files?.fileData?.[0])
      .then((data) => {
        console.log('File uploaded:', data);
        res.send({
          msg: 'get请求成功',
          code: 1,
          success: true,
          data: data?.url,
        });
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  });
});

// 检查是否有openid如果有的话就直接查数据没有的话就弹登录
const searchUserOpenId = (openid) => {
  return new Promise(async (resolve, reject) => {
    // 查找用户
    const data = await userOperate.findOne({ open_id: openid });
    resolve(data);
  });
};

module.exports = router;
