/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-02-19 11:09:59
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-14 21:42:22
 * @FilePath: /beautiful-wedding/dbmodel/advertisement/operate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const giftBookModel = require('./GiftBookModel');

//查询全部
const find = (query, start, pageSize) => {
  return new Promise((resolve, reject) => {
    try {
      giftBookModel
        .find(query)
        .skip(start)
        .limit(pageSize)
        .sort({ update_on: -1 })
        .then((doc) => {
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
    giftBookModel.findOne(query).then((doc) => {
      console.log(doc);
      resolve(doc);
    });
  });
};

//联合查询
const aggregate = (query) => {
  return new Promise((resolve, reject) => {
    giftBookModel
      .aggregate([
        // // 分解逗号分隔的字段
        {
          $addFields: {
            split_field: { $split: ['$authorized_ids', ','] },
          },
        },
        {
          $match: query, // 根据实际情况修改这个匹配条件
        },
        // // 假设你知道要关联的具体值，这里我们使用其中一个值作为示例
        // {
        //   $match: { split_field: 'specific_value_to_match' }, // 根据实际情况修改这个匹配条件
        // },

        // 使用 $lookup 来关联另一张表的所有匹配记录（这里只是一个概念性的示例）
        {
          $lookup: {
            from: 'User', // 相关表的集合名称
            localField: 'authorized_ids', // 当前集合中用于关联的字段名
            foreignField: '_id', // 相关表中用于关联的字段名（需要与 localField 中的值匹配）
            as: 'relatedDocuments', // 输出字段名，存储关联文档的数组
          },
        },
      ])
      .then((doc) => {
        console.log(doc);
        resolve(doc);
      });
  });
};

// 新增操作(save | create 方法)
const create = (value) => {
  return new Promise((resolve, reject) => {
    giftBookModel.create(value).then((doc) => {
      console.log(doc);
      resolve(doc);
    });
  });
};

// 更新操作(update | updateOne | updateMany 方法)
const update = (query, value) => {
  return new Promise((resolve, reject) => {
    giftBookModel.updateOne(query, value).then((doc) => {
      console.log(doc);
      resolve(doc);
    });
  });
};

// 删除操作(remove | removeOne | removeMany | bulkWrite 方法)
const deleteData = (deleteType, query) => {
  return new Promise((resolve, reject) => {
    deleteType = deleteType || 'deleteOne';
    giftBookModel[deleteType](query).then((doc) => {
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
  aggregate,
};
