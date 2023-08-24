// #ifndef VUE3
import Vue from 'vue'
import App from './App'

//request
import {
	$http
} from '@escook/request-miniprogram'

//导入 store 的实例对象
import store from './store/store.js'

//导入nView组件库
import uView from "uview-ui";
Vue.use(uView);

// 挂载到全局
uni.$http = $http
// 配置请求根路径
$http.baseUrl = 'https://api-hmugo-web.itheima.net'

// 请求开始之前做一些事情
$http.beforeRequest = function(options) {
	uni.showLoading({
		title: '数据加载中...',
	})
}

// 请求完成之后做一些事情
$http.afterRequest = function() {
	uni.hideLoading()
}

//#showMsg()封装
uni.$showMsg = function(title = '数据加载失败！', duration = 1500) {
	uni.showToast({
		title,
		duration,
		icon: 'none',
	})
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store,
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app,
	}
}
// #endif