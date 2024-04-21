/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-18 14:00:35
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-21 11:55:11
 * @FilePath: /beautifu-wedding/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const advertisementOperate = require('../dbmodel/advertisement/operate');
const systemOperate = require('../dbmodel/system/operate');

const uuid = require('uuid');
const router = express.Router();

/** 获取广告图 */
router.get('/getAdvertisements', async (req, res) => {
  const query = req.query;
  console.log(query);
  try {
    const data = await advertisementOperate.findOne({ code: query.code });

    res.send({ message: 'get请求成功', code: 1, success: true, data: data });
  } catch (err) {
    console.log(err);
    res.send({ message: 'get请求失败', success: false });
  }
});

/** 新增广告图 */
router.get('/addAdvertisements', async (req, res) => {
  try {
    const query = req.query;
    const data = await advertisementOperate.create({
      _id: uuid.v4(), // 手动指定_id值
      code: query.code,
      url: query.url,
      order: query.order,
    });

    res.send({ message: 'get请求成功', code: 1, success: true, data: data });
  } catch (err) {
    console.log(err);
    res.send({ message: 'get请求失败', success: false });
  }
});

router.get('/deleteAdvertisement', async (req, res) => {
  const query = req.query;
  const data = await advertisementOperate.deleteData('deleteOne', {
    _id: query.id,
  });

  res.send({
    message: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

/** 新增广告图 */
router.get('/addSystemParams', async (req, res) => {
  try {
    const query = req.query;
    const data = await systemOperate.create({
      _id: uuid.v4(),
      comment_flag: query?.comment_flag,
    });

    res.send({ message: 'get请求成功', code: 1, success: true, data: data });
  } catch (err) {
    console.log(err);
    res.send({ message: 'get请求失败', success: false });
  }
});

/** 是否开启评论 */
router.get('/updateSystemParams', async (req, res) => {
  const query = req.query;
  console.log(query);
  try {
    const data = await systemOperate.update({
      _id: query?.id,
      comment_flag: query?.comment_flag,
    });

    res.send({ message: 'get请求成功', code: 1, success: true, data: data });
  } catch (err) {
    console.log(err);
    res.send({ message: 'get请求失败', success: false });
  }
});

/** 是否开启评论 */
router.get('/getSystemParams', async (req, res) => {
  const query = req.query;
  console.log(query);
  try {
    const data = await systemOperate.find();
    res.send({
      message: 'get请求成功',
      code: 1,
      success: true,
      data: data?.[0],
    });
  } catch (err) {
    console.log(err);
    res.send({ message: 'get请求失败', success: false });
  }
});

module.exports = router;
