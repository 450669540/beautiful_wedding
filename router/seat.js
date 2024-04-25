/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-04-19 10:48:58
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-25 15:18:54
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
      message: 'get请求成功',
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
  const seatRes = await seatArrangementOperate.find({
    user_id: tokenRes?.user?._id,
    template_id,
  });
  if (seatRes?.length > 0) {
    res.send({
      message: 'get请求成功',
      code: 1,
      success: true,
      data: seatRes?.[0],
      needTip: true,
    });
    return;
  }
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
    message: 'get请求成功',
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
    message: 'get请求成功',
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
    message: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.get('/getTableDetail', async (req, res) => {
  const query = req.query;

  const data = await tableOperate.findOne({ _id: query?.id });
  res.send({
    message: 'get请求成功',
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

  const result = await tableOperate.find({
    table_no,
    user_id: tokenRes?.user?._id,
    seat_id: seatId,
  });
  console.log('桌数据', result);
  if (result.length > 0) {
    if (!(id && result?.length === 1 && result[0].table_no === table_no)) {
      res.send({
        message: `${table_no}号桌已存在,请修改桌号`,
        code: 0,
        success: false,
        data,
      });
      return;
    }
  }
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
      table_no,
      guest_names,
      create_on: new Date(), //创建时间
      update_on: new Date(), //修改时间
      user_id: tokenRes?.user?._id, //修改人id
      seat_id: seatId,
    });
  }

  res.send({
    message: 'get请求成功',
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
    message: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

module.exports = router;
