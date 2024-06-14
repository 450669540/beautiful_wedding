/*
 * @Author: zhuyingjie zhuyingjie@xueji.com
 * @Date: 2024-03-25 16:42:25
 * @LastEditors: zhuyingjie zhuyingjie@xueji.com
 * @LastEditTime: 2024-06-14 15:07:58
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
            type: 'singleImage',

            background: '#f3f4f5',
            width: '100vw',
            height: '50vh',
            images: [
              {
                url: 'http://image109.360doc.com/DownloadImg/2018/08/1318/141247485_16_20180813064528834.gif',
                styles: {
                  width: '100vw',
                  height: '100vh',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                },
              },
            ],
            url: '',
            margin: '24rpx',
            borderRaduis: '16rpx',
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

    cover: 'https://www.beautifulwedding.cn/example1_1.jpg', //封面

    type: 'longImage', //模版类型

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

const create2 = async () => {
  const res1 = await electronicInvitationComponentOperate.create({
    _id: uuid.v4(),

    content: JSON.stringify([
      {
        page_id: '3',
        list: [
          {
            type: 'calendar',
            styles: {
              position: 'absolute',
              top: 0,
              left: 0,
            },
          },
        ],
      },
      {
        page_id: '4',
        list: [
          {
            type: 'address',
            styles: {
              position: 'absolute',
              top: 0,
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
        styles: {
          background: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        list: [
          {
            type: 'singleImage',
            width: '100vw',
            height: '100vh',

            images: [
              {
                animationClass: 'element3',
                mode: 'widthFix',
                url: 'https://www.beautifulwedding.cn/example7_3.jpg',
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
              color: '#6A4C4C',
              width: '100%',
            },
            children: [
              {
                type: 'text',
                value: 'WEDDING LOVE ',
                animationClass: 'element',
                styles: {
                  fontSize: '100rpx',
                  textAlign: 'center',
                },
              },
              {
                type: 'text',
                value: `我        的        眼        里`,
                styles: {
                  fontSize: '32rpx',
                },
              },
              {
                type: 'text',
                value: `只        有        你`,
                styles: {
                  fontSize: '32rpx',
                  marginTop: '60rpx',
                },
              },
              {
                type: 'text',
                value: `张志明    &     余春娇`,
                animationClass: 'element8',
                styles: {
                  fontSize: '48rpx',
                  fontStyle: 'italic',
                  marginTop: '60rpx',
                },
              },
            ],
          },
          {
            type: 'text',
            value: `见    证    相    爱    的    年    年    岁    岁`,
            animationClass: 'element9',
            styles: {
              fontSize: '32rpx',
              fontStyle: 'italic',
              position: 'absolute',
              bottom: '60rpx',
              letterSpacing: '16rpx',
              fontWeight: 200,
            },
          },
        ],
      },
      {
        id: '2',
        background: '#F5F3F2',
        list: [
          {
            type: 'multi',
            value: '',
            styles: {
              position: 'absolute',
              top: 0,
              backgroundColor: '#FDFDFD',
              padding: '40rpx 40rpx 100rpx 40rpx',
            },
            children: [
              {
                type: 'singleImage',

                background: '#f3f4f5',
                width: '100vw',
                height: '50vh',
                images: [
                  {
                    animationClass: 'element2',
                    url: 'https://www.beautifulwedding.cn/example7_2.jpg',
                    mode: 'widthFix',
                    styles: {
                      width: '540rpx',
                    },
                  },
                ],
              },
              {
                type: 'text',
                value: `出现在我的生命里`,
                animationClass: 'element2',
                styles: {
                  fontSize: '32rpx',
                  marginTop: '40rpx',
                },
              },
              {
                type: 'text',
                value: `很幸运`,
                animationClass: 'element2',
                styles: {
                  fontSize: '32rpx',
                  marginTop: '12rpx',
                },
              },
              {
                type: 'text',
                value: `能在有生之年遇见一个`,
                animationClass: 'element2',
                styles: {
                  fontSize: '32rpx',
                  marginTop: '12rpx',
                },
              },
              {
                type: 'text',
                value: `如此爱我的你。`,
                animationClass: 'element2',
                styles: {
                  fontSize: '32rpx',
                  marginTop: '12rpx',
                },
              },

              {
                type: 'text',
                value: '',
                styles: {
                  width: '490rpx',
                  height: '4rpx',
                  backgroundColor: '#8D7470',
                  marginTop: '100rpx',
                },
              },
            ],
          },
          {
            type: 'multi',
            value: '',
            styles: {
              position: 'absolute',
              top: 270,
              right: 30,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
            children: [
              {
                type: 'text',
                value: ``,
                animationClass: 'element10',

                styles: {
                  width: '30rpx',
                  height: '30rpx',
                  background: '#6A4C4C',
                },
              },

              {
                type: 'text',
                value: `见证相爱的年年岁岁`,
                class: 'verticalFont',
                animationClass: 'element10',
                styles: {
                  fontSize: '32rpx',
                  marginTop: '20rpx',
                  letterSpacing: '20rpx',
                },
              },
            ],
          },
          {
            type: 'multi',
            value: '',
            styles: {
              position: 'absolute',
              top: 0,
              right: 10,
            },
            children: [
              {
                type: 'text',
                value: `13`,
                animationClass: 'element8',
                styles: {
                  fontSize: '32rpx',
                  marginTop: '40rpx',
                },
              },
              {
                type: 'text',
                value: `/`,
                animationClass: 'element8',
                styles: {
                  fontSize: '32rpx',
                  marginTop: '12rpx',
                },
              },
              {
                type: 'text',
                value: `14`,
                animationClass: 'element8',
                styles: {
                  fontSize: '32rpx',
                  marginTop: '12rpx',
                },
              },
              {
                type: 'text',
                value: `YOU ARE APPLE OF MY EYES`,
                class: 'verticalFont',
                animationClass: 'element8',
                styles: {
                  fontSize: '20rpx',
                  marginTop: '500rpx',
                  wordSpacing: '60rpx',
                },
              },
            ],
          },
        ],
      },
      {
        id: '3',
        background: '#F5F3F2',
        list: [
          {
            type: 'singleImage',

            background: '#f3f4f5',
            width: '100vw',
            height: '50vh',
            images: [
              {
                animationClass: 'element2',
                url: 'https://www.beautifulwedding.cn/example7_5.jpg',
                mode: 'widthFix',
                styles: {
                  width: '100vw',
                },
              },
            ],
          },
          {
            type: 'multi',
            value: '',
            styles: {
              width: '100%',
              height: '200rpx',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#F6F1F0',
              color: '#6A4C4C',
              marginLeft: '40rpx',
            },
            children: [
              {
                type: 'text',
                value: `我们的故事藏在画里面`,

                animationClass: 'element10',
                styles: {
                  fontSize: '40rpx',
                  marginTop: '20rpx',
                  letterSpacing: '20rpx',
                  fontStyle: 'italic',
                },
              },
              {
                type: 'text',
                value: `定格了永远`,

                animationClass: 'element4',
                styles: {
                  fontSize: '40rpx',
                  marginTop: '20rpx',
                  letterSpacing: '20rpx',
                  fontStyle: 'italic',
                  marginLeft: '80rpx',
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
                animationClass: 'element2',
                url: 'https://www.beautifulwedding.cn/example7_6.jpg',
                mode: 'widthFix',
                styles: {
                  width: '100vw',
                },
              },
            ],
          },
        ],
      },
      {
        id: '4',
        background: '#F5F3F2',
        list: [
          {
            type: 'multi',
            value: '',
            styles: {
              width: '100%',
              height: '200rpx',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#F6F1F0',
              color: '#6A4C4C',
              marginLeft: '40rpx',
            },
            children: [
              {
                type: 'text',
                value: `我们的故事藏在画里面`,

                animationClass: 'element10',
                styles: {
                  fontSize: '40rpx',
                  marginTop: '20rpx',
                  letterSpacing: '20rpx',
                  fontStyle: 'italic',
                },
              },
              {
                type: 'text',
                value: `定格了永远`,

                animationClass: 'element4',
                styles: {
                  fontSize: '40rpx',
                  marginTop: '20rpx',
                  letterSpacing: '20rpx',
                  fontStyle: 'italic',
                  marginLeft: '80rpx',
                },
              },
            ],
          },
        ],
      },
    ]),
  });

  electronTemplateOperate.create({
    _id: uuid.v4(),

    name: '电影唯美风', //模版名称

    cover: 'https://www.beautifulwedding.cn/example7_4.jpg', //封面

    type: 'flip', //模版类型

    component_id: res1?._id, //组件JSON_ID

    page_id: res2?._id, // 模版页面JSON_ID

    create_on: new Date(), //创建时间

    update_on: new Date(), //修改时间

    create_name: '朱莹洁', //创建者

    start_on: '2024-08-12 00:00:00', // 请柬时间

    address: '安徽省蚌埠市蚌山区银泰百货东北门南210米', //请柬地址

    title: '王五&李四', //请柬标题

    lat: 32.915983,

    lng: 117.369271,

    hotel_name: '罗曼里·宴会酒店',

    audio_path:
      'http://qnvideo.hunliji.com/n-LvZJP0teoKD9I40PDyXmbhuJQ=/Fmj62r8QqAzkeaVon5tkkOgTwDn9.mp3',

    user_id: '22542213-5b94-46b7-b7dd-057f3032a414',
  });
};
// create();
create2();
