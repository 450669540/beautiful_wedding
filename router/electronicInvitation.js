/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-03-25 16:28:01
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-06-14 14:53:30
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

    res.send({ message: 'get请求成功', code: 1, success: true, data: data });
  } catch (err) {
    console.log(err);
    res.send({ message: 'get请求失败', success: false });
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
    res.send({ message: 'get请求成功', code: 1, success: true, data: data });
  } catch (err) {
    console.log(err);
    res.send({ message: 'get请求失败', success: false });
  }
});

/** 保存电子请柬 */
router.post('/saveElectronicInvitation', async (req, res) => {
  let {
    id,
    electronicComponentId,
    electronicComponentContent,
    electronicPageId,
    electronicPageContent,
    name,
    cover,
    type,
    component_id,
    page_id,
    image_count,

    used_count,

    start_on,

    address,

    lat,

    lng,

    title,

    hotel_name,

    orign_template_id,

    audio_path,
  } = req.body;
  let data;
  const authorization = req.headers.authorization; // 假设这是从HTTP请求头部中获取的token
  const tokenRes = await verifyToken(authorization);
  console.log('根据token获取用户信息', tokenRes);

  if (id) {
    const res1 = await electronicInvitationComponentOperate.update(
      { _id: electronicComponentId },
      { content: electronicComponentContent }
    );
    const res2 = await electronicInvitationPageOperate.update(
      { _id: electronicPageId },
      { content: electronicPageContent }
    );
    data = await electronTemplateOperate.update(
      { _id: id },
      {
        name, //模版名称

        cover, //封面

        type, //模版类型

        component_id, //组件JSON_ID

        page_id, // 模版页面JSON_ID

        update_on: new Date(), //修改时间

        update_name: tokenRes?.user?.nick_name, //修改者

        image_count, //图片数量

        used_count, //模版使用次数

        start_on, // 请柬时间

        address, //请柬地址

        lat, // 经度

        lng, //纬度

        title, //请柬标题

        hotel_name, //酒店名称

        audio_path, //背景音乐url
      }
    );
  } else {
    const res1 = await electronicInvitationComponentOperate.findOne({
      _id: data.component_id,
    });
    const res2 = await electronicInvitationPageOperate.findOne({
      _id: data.page_id,
    });

    const result1 = await electronicInvitationComponentOperate.create({
      _id: uuid.v4(),
      ...res1,
    });
    const result2 = await electronicInvitationPageOperate.create({
      _id: uuid.v4(),
      ...res2,
    });

    data = await electronTemplateOperate.create({
      _id: uuid.v4(),
      name, //模版名称

      cover, //封面

      type, //模版类型

      component_id, //组件JSON_ID

      page_id, // 模版页面JSON_ID

      create_on: new Date(), //创建时间

      update_on: new Date(), //修改时间

      user_id: tokenRes?.user?._id, //创建人id

      create_name: tokenRes?.user?.nick_name, //创建者

      update_name: tokenRes?.user?.nick_name, //修改者

      image_count, //图片数量

      used_count, //模版使用次数

      start_on, // 请柬时间

      address, //请柬地址

      lat, // 经度

      lng, //纬度

      title, //请柬标题

      hotel_name, //酒店名称

      orign_template_id, //原始模版id

      audio_path, //背景音乐url
    });
  }

  res.send({
    message: 'get请求成功',
    code: 1,
    success: true,
    data,
  });
});

/** 删除指定请柬 */
router.get('/deleteElectronicInvitationById', async (req, res) => {
  const query = req.query;
  let result = await electronTemplateOperate.findOne({ _id: query?.id });
  if (result) {
    const data1 = await electronicInvitationComponentOperate.deleteData(
      'deleteOne',
      {
        _id: result?.component_id,
      }
    );
    const data2 = await electronicInvitationPageOperate.deleteData(
      'deleteOne',
      {
        _id: result?.page_id,
      }
    );
    const data = await electronTemplateOperate.deleteData('deleteOne', {
      _id: query.id,
    });
    res.send({
      message: 'get请求成功',
      code: 1,
      success: true,
      data,
    });
  }
});

module.exports = router;
