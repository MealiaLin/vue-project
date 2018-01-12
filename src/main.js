// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'Vuex'
import App from './App'
import router from './router'
import store from './store/index'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'animate.css/animate.css'

//import  '../statics/mui/js/mui.min.js'
//引入mui的样式
import '../static/mui/css/icons-extra.css'
import '../static/mui/css/mui.css'
import '../static/query.css'
//引入字体图标样式
import '../static/mui/css/iconfont.css'
//引入vue-scroller
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueResource)
Vue.directive("bodyNoScroll",{//全局指令 禁用body滚动条
  update(el,binding) {
    var body = document.body;
    if(binding.value){
      localStorage.scrollTop = localStorage.scrollTop || body.scrollTop;
      body.style.position = "fixed";
      body.style.overflow = "hidden";
    }else{
      body.style.position = "";
      body.style.overflow = "visible";
      if(localStorage.scrollTop){
        body.scrollTop = localStorage.scrollTop;
      }
      localStorage.scrollTop = "";
    }
  },
  unbind(el,binding) {
    var body = document.body;
    body.style.position = "";
    body.style.overflow = "visible";
    localStorage.scrollTop = "";
  },
});

Vue.http.interceptors.push(function (req, next) {
  if (req) {
    req.headers.set('X-Requested-With', "XMLHttpRequest");
    req.headers.set('Content-Type', "application/x-www-form-urlencoded;charset=utf-8");
    req.emulateJSON = true;
  }
  next(function (res) {
    if (res && res.ok === true) {
      /*res.sData = JSON.parse(res.data);*/
      try {
        res.sData = JSON.parse(res.data);
      } catch (e) {
        res.sData = res.data;
      }
    }
  });
})
//
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
})
