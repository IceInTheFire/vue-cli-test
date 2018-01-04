// 使用 Mock
const Mock = require('mockjs')
const baseUrl = 'http://www.yueqingfang.cn/markdown/php'
const testData = require('../test/mockData/data.json')

// Mock.mock('/conn.php', /post|get/i, JSON.stringify(testData, null, 4))
Mock.mock(baseUrl + '/conn.php', /post|get/i, testData)
