/**
 * 统一请求
 * @author HugLemon
 * @copyright inwind.cn
 */
import customFetch from './customFetch';

/**
 * 初始化站点
 * config = {基础信息，语言列表，seo配置}
 * contentList = []
 * productList = []
 * @returns
 */
export const initWebsite = async function () {
	const data = await customFetch('pub_website.initWebsite', {}, 'POST');
	return data;
};

// 请求内容列表
export const getContentList = async function (params = {}) {
	const data = await customFetch('pub_website.getContentList', {}, 'POST');
	return data;
};

// 请求内容详情
export const getContentInfo = async function (params = {}) {
	const data = await customFetch('pub_website.getContentInfo', { ...params }, 'POST');
	return data;
};
