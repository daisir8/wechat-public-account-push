/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */

TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '6164d804c076e60c3f2b6b4094acaa5c',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: true,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 3,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 3,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'default',
  }
const USER_CONFIG = 
 {
	"APP_ID": "wxc50473b3d6111ffd",
	"APP_SECRET": "dc4a3c9bf39d2fa2521328d5c37c1952",
	"IS_SHOW_COLOR": true,
	"CALLBACK_TEMPLATE_ID": "eL96rPEh4VzBnoWV2MppshQaFLr_aoV3UfRA2-tA4TI",
	"CALLBACK_USERS": [{
		"name": "自己",
		"id": "oUcwA2GItAzBzrGQ_L124NXV3-YU"
	}],
	"USERS": [{
		"name": "小竹",
		"id": "oUcwA2GItAzBzrGQ_L124NXV3-YU",
		"useTemplateId": "eL96rPEh4VzBnoWV2MppshQaFLr_aoV3UfRA2-tA4TI",
		"province": "福建",
		"city": "晋江",
		"horoscopeDate": "02-14",
		"horoscopeDateType": "今日",
		"openUrl": "https://shuangxunian.github.io/",
		"festivals": [{
			"type": "生日",
			"name": "生日快乐~",
			"date": "02-14",
			"year": "2004"
		}],
		"customizedDateList": [{
			"keyword": "认识纪念日",
			"date": "2025-10-03"
		}]
	}],
	"SWITCH": {
		"weather": true,
		"holidaytts": true,
		"CIBA": true,
		"oneTalk": false,
		"earthyLoveWords": false,
		"momentCopyrighting": false,
		"poisonChickenSoup": false,
		"poetry": false,
		"horoscope": false,
		"birthdayMessage": true
	}
}
 
 
 module.exports = USER_CONFIG
