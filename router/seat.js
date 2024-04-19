/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-04-19 10:48:58
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-19 13:27:20
 * @FilePath: /beautiful-wedding/router/seat.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const seatArrangementOperate = require('../dbmodel/seatArrangement/operate');
const tableOperate = require('../dbmodel/table/operate');

const uuid = require('uuid');
const { verifyToken } = require('../utils/tokenUtils');

const router = express.Router();

/** 获取排座数据 */
router.get('/seatList', async (req, res) => {
  const query = req.query;
  const authorization = req.headers.authorization; // 假设这是从HTTP请求头部中获取的token
  const tokenRes = await verifyToken(authorization);
  console.log('根据token获取用户信息', tokenRes);
  if (tokenRes?.user?._id) {
    const data = await seatArrangementOperate.find(
      { user_id: tokenRes?.user?._id },
      query?.start,
      query?.pageSize
    );
    res.send({
      msg: 'get请求成功',
      code: 1,
      success: true,
      data,
    });
  }
});

router.post('/saveSeat', async (req, res) => {
  let { template_id, template_name, id } = req.body;
  let data;
  const authorization = req.headers.authorization; // 假设这是从HTTP请求头部中获取的token
  const tokenRes = await verifyToken(authorization);
  console.log('根据token获取用户信息', tokenRes);
  if (id) {
    data = await seatArrangementOperate.update(
      { _id: id },
      {
        template_id,
        template_name,
        update_on: new Date(), //修改时间
      }
    );
  } else {
    data = await seatArrangementOperate.create({
      _id: uuid.v4(),
      template_id,
      template_name,
      create_on: new Date(), //创建时间
      update_on: new Date(), //修改时间
      user_id: tokenRes?.user?._id, //创建人id
    });
  }

  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.get('/deleteSeat', async (req, res) => {
  const query = req.query;
  const data = await seatArrangementOperate.deleteData('deleteOne', {
    _id: query.id,
  });

  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

/** 获取所有桌数据 */
router.get('/allTableList', async (req, res) => {
  const query = req.query;
  console.log('keyword', query?.keyword);
  const data = await tableOperate.find(
    query?.keyword
      ? {
          seat_id: query?.id,

          guest_names: { $regex: query?.keyword }, //模糊查询
        }
      : {
          seat_id: query?.id,
        }
    //   query?.start,
    //   query?.pageSize
  );
  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.get('/getTableDetail', async (req, res) => {
  const query = req.query;

  const data = await tableOperate.findOne({ _id: query?.id });
  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.post('/saveTable', async (req, res) => {
  let { guest_names, table_no, id, seatId } = req.body;
  let data;
  const authorization = req.headers.authorization; // 假设这是从HTTP请求头部中获取的token
  const tokenRes = await verifyToken(authorization);
  console.log('根据token获取用户信息', tokenRes);

  if (id) {
    data = await tableOperate.update(
      { _id: id },
      {
        table_no,
        guest_names,
        update_on: new Date(), //修改时间
        user_id: tokenRes?.user?._id,
      }
    );
  } else {
    data = await tableOperate.create({
      _id: uuid.v4(),
      tableNo,
      guest_names,
      create_on: new Date(), //创建时间
      update_on: new Date(), //修改时间
      user_id: tokenRes?.user?._id, //修改人id
      seat_id: seatId,
    });
  }

  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.get('/deleteTable', async (req, res) => {
  const query = req.query;
  const data = await tableOperate.deleteData('deleteOne', {
    _id: query.id,
  });
  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

module.exports = router;
