/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx6e6c1863313f417c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '5f43ff5194283a5d132923e50c51d750',

  PROVINCE: '山东',
  CITY: '聊城',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小号',
      
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'odVvL53bgw0J-TKb8-pyTzY3miK4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'gIdpWK8TGXgL9GLFFCbQ4jJi_yxOorDpQuEqeM4X20Q',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '6-26',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-06-10' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
        { keyword: 'bir_day1', date: '2001-01-27' },
        { keyword: 'bir_day2', date: '2001-06-26' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '妍妍宝贝❤',
      

      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'x',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'gIdpWK8TGXgL9GLFFCbQ4jJi_yxOorDpQuEqeM4X20Q',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-25',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-11-13' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
        { keyword: 'bir_day1', date: '2001-01-27' },
        { keyword: 'bir_day2', date: '2001-06-26' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'c0vgPKuBwDNj6Xtus8MMQEZX1eYZwHsDm0syAfvhPOo',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'odVvL52K0Tcl5rVQ-Ct0ajbCAVj4',
    }
  ],

}

module.exports = USER_CONFIG

