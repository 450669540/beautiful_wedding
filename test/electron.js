/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-03-25 16:42:25
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-04-02 14:19:59
 * @FilePath: /beautiful-wedding/test/electron.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const electronTemplateOperate = require('../dbmodel/electronTemplate/operate');
const electronicInvitationComponentOperate = require('../dbmodel/electronicInvitationComponent/operate');
const electronicInvitationPageOperate = require('../dbmodel/electronicInvitationPage/operate');

const uuid = require('uuid');

const create = async () => {
  const res1 = await electronicInvitationComponentOperate.create({
    _id: uuid.v4(),

    content: JSON.stringify([
      {
        page_id: '3',
        list: [
          {
            type: 'calendar',
            url: `https://www.beautifulwedding.cn/example1_1.jpg`,
            styles: {
              position: 'absolute',
              top: 0,
              left: 0,
            },
          },
          {
            type: 'countDownComponent',
            value: '2024-04-01',
            styles: {
              position: 'absolute',
              bottom: 30,
              left: 0,
            },
          },
        ],
      },
    ]),
  });

  const res2 = await electronicInvitationPageOperate.create({
    _id: uuid.v4(),

    content: JSON.stringify([
      {
        id: '1',
        background: '#fff',
        list: [
          {
            type: 'singleImage',
            width: '100vw',
            height: '100vh',
            images: [
              {
                url: 'https://www.beautifulwedding.cn/example1_1.jpg',
                styles: {
                  width: '100vw',
                  height: '100vh',
                },
              },
            ],
          },

          {
            type: 'multi',
            value: '',
            styles: {
              position: 'absolute',
              top: '30rpx',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              color: '#FFE8B6',
              width: '100%',
            },
            children: [
              {
                type: 'text',
                value: '我们结婚了',
                styles: {
                  fontSize: '28rpx',
                },
              },
              {
                type: 'text',
                value: '囍',
                styles: {
                  fontSize: '80rpx',
                },
              },
              {
                type: 'text',
                value: 'OUR WEDDING',
                styles: {
                  fontSize: '48rpx',
                  fontStyle: 'italic',
                },
              },
            ],
          },
        ],
      },
      {
        id: '2',
        background: '#fff',
        list: [
          {
            type: 'multi',
            value: '',
            styles: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20rpx 28rpx 100rpx 28rpx',
              color: '#C4C4C4',
            },
            children: [
              {
                type: 'multi',
                value: '',
                styles: {
                  display: 'flex',
                  flexDirection: 'column',
                },
                children: [
                  {
                    type: 'text',
                    value: 'Like you',
                    styles: {
                      color: '#cf000b',
                      fontSize: '48rpx',
                      fontFamily: 'Adorable',
                    },
                  },
                  {
                    type: 'text',
                    value: 'We got merried',
                    styles: {
                      fontSize: '16rpx',
                    },
                  },
                ],
              },
              {
                type: 'text',
                value: `I would rather share one lifetime with you than face all the ages
                  of this world alone.`,
                styles: {
                  fontSize: '16rpx',
                  width: '260rpx',
                  textAlign: 'right',
                },
              },
            ],
          },

          {
            type: 'singleImage',

            background: '#f3f4f5',
            width: '100vw',
            height: '50vh',
            images: [
              {
                url: 'https://www.beautifulwedding.cn/example1_2.jpg',
                styles: {
                  width: '100vw',
                  height: '100vw',
                },
              },
            ],
          },
          {
            type: 'multi',
            value: '',
            styles: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20rpx 28rpx 60rpx 28rpx',
              color: '#C4C4C4',
            },
            children: [
              {
                type: 'text',
                value: `I would rather share one lifetime with you than face all the ages
                      of this world alone.`,
                styles: {
                  fontSize: '16rpx',
                  width: '180rpx',
                  textAlign: 'left',
                },
              },
              {
                type: 'text',
                value: 'Our wedding',
                styles: {
                  color: '#cf000b',
                  fontSize: '24rpx',
                },
              },
              {
                type: 'text',
                value: `I would rather share one lifetime with you than face all the ages
                      of this world alone.`,
                styles: {
                  fontSize: '16rpx',
                  width: '180rpx',
                  textAlign: 'right',
                },
              },
            ],
          },
        ],
      },
      {
        id: '3',
        background: '#fff',
        list: [
          {
            type: 'singleImage',

            background: '#f3f4f5',
            width: '100vw',
            height: '50vh',
            images: [
              {
                url: 'https://www.beautifulwedding.cn/example1_3.jpg',
                styles: {
                  width: '86vw',
                  margin: '0 7vw',
                },
                mode: 'widthFix',
              },
            ],
          },
          {
            type: 'multi',
            value: '',
            styles: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '60rpx 0',
            },
            children: [
              {
                type: 'text',
                value: `MY LOVE`,
                styles: {
                  color: '#cf000b',
                  fontSize: '80rpx',
                  fontFamily: 'Adorable',
                },
              },
              {
                type: 'text',
                value: ' - 我 十 分 爱 你 -',
                styles: {
                  fontSize: '26rpx',
                  marginTop: '10rpx',
                },
              },
            ],
          },
          {
            type: 'multi',
            value: '',
            styles: {
              position: 'relative',
            },
            children: [
              {
                type: 'singleImage',

                background: '#f3f4f5',
                width: '100vw',
                height: '50vh',
                images: [
                  {
                    url: 'https://www.beautifulwedding.cn/example1_4.jpg',
                    styles: {
                      width: '90vw',
                      margin: '0 5%',
                    },
                    mode: 'widthFix',
                  },
                ],
              },
              {
                type: 'multi',
                value: '',
                styles: {
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                },
                children: [
                  {
                    type: 'multi',
                    value: '',
                    styles: {
                      position: 'absolute',
                      bottom: '24rpx',
                      borderRadius: '16rpx',
                      background: '#A11E18',
                      color: '#fff',
                      padding: '14rpx 20rpx',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                    onClick: () => {
                      Taro.makePhoneCall({
                        phoneNumber: '14565656555',
                      });
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ]),
  });

  electronTemplateOperate.create({
    _id: uuid.v4(),

    name: '喜嫁风', //模版名称

    cover: 'https://www.beautifulwedding.cn/example3_3.jpg', //封面

    type: 'flip', //模版类型

    component_id: res1?._id, //组件JSON_ID

    page_id: res2?._id, // 模版页面JSON_ID

    create_on: new Date(), //创建时间

    update_on: new Date(), //修改时间

    create_name: '朱莹洁', //创建者

    start_on: '2024-08-12 00:00:00', // 请柬时间

    address: '安徽省蚌埠市龙子湖区慧', //请柬地址

    title: '王五&李四', //请柬标题
  });
};

create();
