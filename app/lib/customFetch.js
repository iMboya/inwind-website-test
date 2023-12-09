/**
 * 自定义fecth
 * 发送前后拦截
 * @author HugLemon
 * @copyright inwind.cn
 */
import pubfn from './function';

var counterNum = 0;
var Logger = {
	startTime: new Date().getTime(),
	colorArr: ['#0095ff', '#67C23A'],
};

// unicloud client url
const client = 'https://fc-mp-bca925c9-72bc-4e92-8c87-d596015241bf.next.bspapp.com/http/router/client/';

// 站点配置
const websiteConfig = {
	website_id: '65715cd58b0da41d311993ab',
	website_secret: 'z8n4nrxj-oex60ct8-vn0ulnxs-417malp8',
};

const customFetch = async (path, params = {}, method = 'POST', cacheSeconds = 0) => {
	// 拼接请求url
	let url = `${client}${path}`;

	// 混入必要参数
	params = {
		...params,
		...websiteConfig,
	};

	// 字符串化后拼接url
	let queryString = Object.entries(params)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
		.join('&');

	url = `${url}?${queryString}`;

	// 暂时没用
	let options = {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
	};

	// 发送修改后的请求
	let response = await fetch(url, options);
	response = await response.json();

	// 控制台打印
	requestComplete(url, params, response);

	// 接受数据后的拦截
	// if (response.code !== 0) {
	// 	let errorMsg = 'sdf4s56d4f6sd546f5';
	// 	throw new Error(response.msg);
	// }

	return response.data;
};

// 请求完成回调
function requestComplete(url, params, res) {
	Logger.endTime = new Date().getTime();
	Logger.runTime = Logger.endTime - Logger.startTime;
	let colorArr = Logger.colorArr;
	let colorStr = colorArr[counterNum % colorArr.length];
	counterNum++;
	console.log('%c--------【开始】【服务器请求】【' + url + '】--------', 'color: ' + colorStr + ';font-size: 12px;font-weight: bold;');
	console.log('【请求地址】: ', url);
	// console.log('【请求参数】: ', params);
	// console.log('【返回数据】: ', JSON.stringify(res));
	if (res.code !== 0) {
		console.log('【错误提示】: ', res.msg);
	} else if (res.msg) {
		console.log('【请求结果】: ', res.msg);
	}
	console.log('【总体耗时】: ', Logger.runTime, '毫秒【含页面渲染】');
	console.log('【请求时间】: ', pubfn.timeFormat(Logger.startTime, 'yyyy-MM-dd hh:mm:ss'));
	console.log('%c--------【结束】【服务器请求】【' + url + '】--------', 'color: ' + colorStr + ';font-size: 12px;font-weight: bold;');
}

export default customFetch;
