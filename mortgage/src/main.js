// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import Vuex from 'vuex'
import Element from 'element-ui'
import axios from 'axios'
import $ from 'jquery'
import wScrollBar from 'wscrollbar'
import wDatePicker from 'wdatepicker';

import 'element-ui/lib/theme-chalk/index.css'
/****
 * **引入公共css
 * *****/
import './css/common.css'
// import * as {global} from './config/index.vue'
// import * as global from './config/index.vue'
// Vue.prototype.GLOBAL = global
// Vue.prototype.GLOBAL = urlPort
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Element)
Vue.use(echarts)

// let newtoken = document.cookie;

let oldtoken = localStorage.getItem("cooktoken");
let userId = localStorage.getItem("userid");
//创建axios实例
let newtoken = userId + '_' + oldtoken;
if(userId == null || oldtoken==null){
  newtoken = null
};
var $http = axios.create({});
let store = new Vuex.Store({
  state: {
    token: newtoken,
    userId: userId
  },
  mutations: {

  }
});

/*
// http request 拦截器
axios.interceptors.request.use(
  config => {
     if (newtoken) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
          config.headers.Token = `${store.state.token}`;
     }
     return config;
 },
 err => {
  //  if(error.response.status == 2001){
  //   window.location.href = 'http://access.evergrande.com/siam/logout?service=http://web.evergrande.com'
  //  };
     return Promise.reject(err);
});

axios.interceptors.response.use((response) => {

  return response;
}, function (error) {
  if(305 === error.response.status){
    if ("loginError" === error.response.data.message) {
        window.location = 'http://portal.evergrandeinformation.com/portal/portalnv/main.do';
    }
  }else {
    return Promise.reject(error);
  }
});
*/  


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
Date.prototype.Format = function(fmt){
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S": this.getMilliseconds()
  };
  if(/(y+)/.test(fmt))
  fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for(var k in o)
  if(new RegExp("("+ k + ")").test(fmt))
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]):(("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};
