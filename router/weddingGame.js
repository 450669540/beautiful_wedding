/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-04-18 10:53:43
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-18 11:06:21
 * @FilePath: /beautiful-wedding/router/weddingGame.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const weddingGameOperate = require('../dbmodel/weddingGame/operate');
const uuid = require('uuid');

const router = express.Router();

router.get('/getWeddingGame', async (req, res) => {
  const authorization = req.headers.authorization; // 假设这是从HTTP请求头部中获取的token
  const tokenRes = await verifyToken(authorization);
  const data = await weddingGameOperate.findOne({
    create_id: tokenRes?.user?._id,
  });
  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.post('/saveWeddingGame', async (req, res) => {
  let { id, number, game_names } = req.body;
  const authorization = req.headers.authorization; // 假设这是从HTTP请求头部中获取的token
  const tokenRes = await verifyToken(authorization);
  console.log('根据token获取用户信息', tokenRes);
  let data;
  if (id) {
    data = await weddingGameOperate.create({
      _id: uuid.v4(),
      number, //抽取数
      game_names, //游戏列表,分隔
      create_on: new Date(),
      update_on: new Date(), //修改时间
      create_id: tokenRes?.user?._id, //创建人id
    });
  } else {
    data = await weddingGameOperate.update(
      { _id: id },
      {
        number, //抽取数
        game_names, //游戏列表,分隔
        update_on: new Date(), //修改时间
      }
    );
  }
  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

module.exports = router;
