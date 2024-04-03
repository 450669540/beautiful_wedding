/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-19 11:09:59
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-03 17:16:25
 * @FilePath: /beautiful-wedding/dbmodel/advertisement/operate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const systemModel = require('./SystemModel');

//查询全部
const find = (query) => {
  return new Promise((resolve, reject) => {
    try {
      systemModel.find(query).then((doc) => {
        console.log(doc);
        resolve(doc);
      });
    } catch (err) {
      reject(err);
    }
  });
};

// 富查询条件，对象格式，键值对
const findOne = (query) => {
  return new Promise((resolve, reject) => {
    systemModel.find(query).then((doc) => {
      console.log(doc);
      resolve(doc);
    });
  });
};

// 新增操作(save | create 方法)
const create = (value) => {
  return new Promise((resolve, reject) => {
    systemModel.create(value).then((doc) => {
      console.log(doc);
      resolve(doc);
    });
  });
};

// 更新操作(update | updateOne | updateMany 方法)
const update = (query, value) => {
  return new Promise((resolve, reject) => {
    systemModel.update(query, value).then((doc) => {
      console.log(doc);
      resolve(doc);
    });
  });
};

// 删除操作(remove | removeOne | removeMany | bulkWrite 方法)
const deleteData = (deleteType, query) => {
  return new Promise((resolve, reject) => {
    deleteType = deleteType || 'deleteOne';
    systemModel[deleteType](query).then((doc) => {
      console.log(doc);
      resolve(doc);
    });
  });
};

module.exports = {
  create,
  update,
  find,
  findOne,
  deleteData,
};
