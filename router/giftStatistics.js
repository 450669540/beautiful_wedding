/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-03-26 15:48:42
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-14 11:51:19
 * @FilePath: /beautiful-wedding/router/comment.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const giftBookOperate = require('../dbmodel/giftBook/operate');
const uuid = require('uuid');

const router = express.Router();

router.get('/giftBookList', async (req, res) => {
  const query = req.query;
  const data = await giftBookOperate.find(
    { user_id: req?.session?.user?._id },
    query?.start,
    query?.pageSize
  );
  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.get('/getGiftBookDetail', async (req, res) => {
  const query = req.query;

  const data = await giftBookOperate.findOne({ _id: query?.id });
  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.post('/saveGiftBook', async (req, res) => {
  let { name, activity_on, remark, id } = req.body;
  let data;
  if (id) {
    data = await giftBookOperate.update(
      { _id: id },
      {
        name,
        activity_on,
        remark,
        update_on: new Date(), //修改时间
      }
    );
  } else {
    data = await giftBookOperate.create({
      _id: uuid.v4(),
      name,
      activity_on,
      remark,
      create_on: new Date(), //创建时间
      update_on: new Date(), //修改时间
      user_id: req?.session?.user?._id, //创建人id
    });
  }

  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

module.exports = router;
