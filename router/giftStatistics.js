/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-03-26 15:48:42
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-18 10:39:44
 * @FilePath: /beautiful-wedding/router/comment.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const giftBookOperate = require('../dbmodel/giftBook/operate');
const bookRecordOperate = require('../dbmodel/bookRecord/operate');

const userOperate = require('../dbmodel/user/operate');

const uuid = require('uuid');
const { verifyToken } = require('../utils/tokenUtils');

const router = express.Router();

router.get('/giftBookList', async (req, res) => {
  const query = req.query;
  const authorization = req.headers.authorization; // 假设这是从HTTP请求头部中获取的token
  const tokenRes = await verifyToken(authorization);
  console.log('根据token获取用户信息', tokenRes);
  if (tokenRes?.user?._id) {
    const data = await giftBookOperate.find(
      {
        $or: [
          { user_id: tokenRes?.user?._id },
          { authorized_ids: { $regex: tokenRes?.user?._id } },
        ],
      },

      query?.start,
      query?.pageSize
    );
    res.send({
      message: 'get请求成功',
      code: 1,
      success: true,
      data,
    });
  }
});

router.get('/getGiftBookDetail', async (req, res) => {
  const query = req.query;

  let data = await giftBookOperate.findOne({ _id: query?.id });

  res.send({
    message: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.post('/saveGiftBook', async (req, res) => {
  let { name, activity_on, remark, id } = req.body;
  let data;
  const authorization = req.headers.authorization; // 假设这是从HTTP请求头部中获取的token
  const tokenRes = await verifyToken(authorization);
  console.log('根据token获取用户信息', tokenRes);
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
      user_id: tokenRes?.user?._id, //创建人id
    });
  }

  res.send({
    message: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.get('/deleteGiftBook', async (req, res) => {
  const query = req.query;
  const data = await giftBookOperate.deleteData('deleteOne', {
    _id: query.id,
  });
  res.send({
    message: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.post('/updateGiftBookTotal', async (req, res) => {
  let { id, total_record, total_money } = req.body;
  let data = await giftBookOperate.update(
    { _id: id },
    {
      total_record,
      total_money,
    }
  );

  res.send({
    message: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.post('/updateGiftBookAuthorized', async (req, res) => {
  let { id, authorized_ids } = req.body;
  let data = await giftBookOperate.update(
    { _id: id },
    {
      authorized_ids,
    }
  );

  res.send({
    message: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

/** 获取礼金记录 */
router.get('/bookRecordList', async (req, res) => {
  const query = req.query;
  console.log('keyword', query?.keyword);
  const data = await bookRecordOperate.find(
    query?.keyword
      ? {
          book_id: query?.id,

          name: { $regex: query?.keyword }, //模糊查询
        }
      : {
          book_id: query?.id,
        },
    query?.start,
    query?.pageSize
  );
  res.send({
    message: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.get('/getBookRecordDetail', async (req, res) => {
  const query = req.query;

  const data = await bookRecordOperate.findOne({ _id: query?.id });
  res.send({
    message: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.post('/saveBookRecord', async (req, res) => {
  let { name, gift_money, remark, id, bookId } = req.body;
  let data;
  const authorization = req.headers.authorization; // 假设这是从HTTP请求头部中获取的token
  const tokenRes = await verifyToken(authorization);
  console.log('根据token获取用户信息', tokenRes);
  if (id) {
    data = await bookRecordOperate.update(
      { _id: id },
      {
        name,
        gift_money,
        remark,
        update_on: new Date(), //修改时间
        update_id: tokenRes?.user?._id,
        book_id: bookId,
      }
    );
  } else {
    data = await bookRecordOperate.create({
      _id: uuid.v4(),
      name,
      gift_money,
      remark,
      create_on: new Date(), //创建时间
      update_on: new Date(), //修改时间
      create_id: tokenRes?.user?._id, //创建人id
      update_id: tokenRes?.user?._id, //修改人id
      book_id: bookId,
    });
  }

  res.send({
    message: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.get('/deleteBookRecord', async (req, res) => {
  const query = req.query;
  const data = await bookRecordOperate.deleteData('deleteOne', {
    _id: query.id,
  });
  res.send({
    message: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.get('/deleteAllBookRecord', async (req, res) => {
  const data = await bookRecordOperate.deleteData('deleteMany');
  res.send({
    message: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

module.exports = router;
