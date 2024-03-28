/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-03-26 15:48:42
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-03-26 17:23:25
 * @FilePath: /beautiful-wedding/router/comment.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const commentOperate = require('../dbmodel/comment/operate');
const uuid = require('uuid');

const router = express.Router();

router.get('/commentList', async (req, res) => {
  const query = req.query;

  const data = await commentOperate.find({ template_id: query?.template_id });
  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

router.post('/saveComment', async (req, res) => {
  let { create, content, template_id } = req.body;
  const data = await commentOperate.create({
    _id: uuid.v4(),
    create,
    content,
    create_on: new Date(),
    template_id,
  });
  res.send({
    msg: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

module.exports = router;
