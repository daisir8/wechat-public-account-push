/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */

TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '6164d804c076e60c3f2b6b4094acaa5c'
  
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
