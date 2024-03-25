/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-18 14:00:35
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-03-25 15:01:04
 * @FilePath: /beautifu-wedding/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const advertisementOperate = require('../dbmodel/advertisement/operate');

const router = express.Router();

/** 获取广告图 */
router.get('/getAdvertisements', async (req, res) => {
  const query = req.query;
  console.log(query);
  try {
    const data = await advertisementOperate.findOne({ code: query.code });

    res.send({ msg: 'get请求成功', code: 1, success: true, data: data });
  } catch (err) {
    console.log(err);
    res.send({ msg: 'get请求失败', success: false });
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

    res.send({ msg: 'get请求成功', code: 1, success: true, data: data });
  } catch (err) {
    console.log(err);
    res.send({ msg: 'get请求失败', success: false });
  }
});

router.post('/post', (req, res) => {
  const body = res.body;
  res.send({
    msg: 'post请求成功',
    data: body,
  });
});

module.exports = router;
