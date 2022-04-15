// 旅游网首页接口
import request from "@/utils/request.js";


//获取轮播图数据
export function getBannerList() {
	return request.get("/combination/ly_banner_list", {}, {
		noAuth: true
	});
}
//获取旅游网首页列表信息
export function getLvproducts(data) {
	return request.get("lvproducts", data, {
		noAuth: true
	});
}

// 打卡操作
export function handleLvyouclock(id) {
	return request.get("lvyou_clock?id="+id,{}, {
		noAuth: true
	});
}
// 列表详情
export function getLvyouDetail(id) {
	return request.get("lvyou_detail?id="+id, {}, {
		noAuth: true
	});
}

