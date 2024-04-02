/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-03-25 16:28:01
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-02 15:13:12
 * @FilePath: /beautiful-wedding/router/electron.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const electronTemplateOperate = require('../dbmodel/electronTemplate/operate');
const electronicInvitationComponentOperate = require('../dbmodel/electronicInvitationComponent/operate');
const electronicInvitationPageOperate = require('../dbmodel/electronicInvitationPage/operate');

const uuid = require('uuid');

const router = express.Router();

/** 获取全部电子请柬 */
router.get('/getElectronicInvitationList', async (req, res) => {
  const query = req.query;
  console.log(query);
  try {
    let data = await electronTemplateOperate.find();

    res.send({ msg: 'get请求成功', code: 1, success: true, data: data });
  } catch (err) {
    console.log(err);
    res.send({ msg: 'get请求失败', success: false });
  }
});

/** 获取电子请柬详情 */
router.get('/getElectronicInvitationById', async (req, res) => {
  const query = req.query;
  console.log(query);
  try {
    let data = await electronTemplateOperate.findOne({ _id: query?.id });
    if (data) {
      const res1 = await electronicInvitationComponentOperate.findOne({
        _id: data.component_id,
      });
      const res2 = await electronicInvitationPageOperate.findOne({
        _id: data.page_id,
      });
      data = {
        ...data?._doc,
        components: JSON.parse(res1?.content),
        pages: JSON.parse(res2.content),
      };
    }
    res.send({ msg: 'get请求成功', code: 1, success: true, data: data });
  } catch (err) {
    console.log(err);
    res.send({ msg: 'get请求失败', success: false });
  }
});

/** 删除指定请柬 */
router.get('/deleteElectronicInvitationById', async (req, res) => {
  const query = req.query;
  let result = await electronTemplateOperate.findOne({ _id: query?.id });
  if (result) {
    const data1 = await electronicInvitationComponentOperate.deleteData(
      'deleteOne',
      {
        _id: data?.component_id,
      }
    );
    const data2 = await electronicInvitationPageOperate.deleteData(
      'deleteOne',
      {
        _id: data?.page_id,
      }
    );
    const data = await electronTemplateOperate.deleteData('deleteOne', {
      _id: query.id,
    });
    res.send({
      msg: 'get请求成功',
      code: 1,
      success: true,
      data,
    });
  }
});

module.exports = router;
