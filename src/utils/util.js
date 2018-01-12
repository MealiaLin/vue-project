//相互调用，接收的地方用import，输出的地方用export，此处调用cookie.js中的方法
import cookie from './cookie';
/**
 *自行封装方法test
 */
export function url(item) {
  var obj;
  return obj = 'test'
}

/**
 *原生消息弹框
 */
export function pop() {
  this.$toast({
    message: "敬请期待",
    position: 'bottom',
    duration: 1500
  })
}

/**
 *根据path计算是否显示头部和尾部
 */
export async function checkShowHeader(){

}

/**
 * 将用户的信息从cookie取出来，塞到store中去
 */
export async function setUserToStore(){
  try {
    const user = cookie("userInfo") && JSON.parse(cookie("userInfo"));
    //取不到账号说明userinfo不在cookie中。让用户重新登录
    if (user.username) {
      setTimeout(() => { //加个延时，在用户刷新浏览器的时候，其他的view能触发user的watch
        this.$store.dispatch('refreshUserInfo', user);
      }, 100);
    } else {
      window.router.push({path: '/login'});
    }
  } catch (e) {
    window.router.push({path: '/login'});
  }

}
/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  // ['?id=12345', '&a=b']
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
};

//转货币
export function fmoney(e, n) {
  if (!e) return "";
  n = n > 0 && n <= 20 ? n : 2, e = parseFloat((e + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  var s = e.split(".")[0].split("").reverse(),
    o = e.split(".")[1];
  var t = '';
  for (var i = 0; i < s.length; i++) t += s[i] + ((i + 1) % 3 == 0 && i + 1 != s.length ? "," : "");
  return t.split("").reverse().join("") + "." + o
}

//Date对象转化为yyyy-MM-dd格式
export function dateFormat(dateObj){
  var year = dateObj.getFullYear();
  var month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  var day = ("0" + dateObj.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}

//定义请求、响应原生函数--和OA系统联调，调用他们的原生函数，比如退出crm回退到OA系统
export function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
  if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}

//注册回退函数给原生调用
/*setupWebViewJavascriptBridge(function(bridge){
  bridge.registerHandler('backToNative', function(data, responseCallback) {
    if(this.$route.path == '/default_BL' ||
      this.$route.path == '/default_CS' ||
      this.$route.path == '/default_WD' ||
      this.$route.path == '/leader_CS' ||
      this.$route.path == '/user_view'){//哪些页面需要退回到原生
      responseCallback("exit");
    }else{//其他页面history.back
      this.$router.go(-1)
      /!*if( history.length > 1 ){
        history.back();
      }else{
        responseCallback("exit");
      }*!/
    }
  });
});*/

//测试调用全局函数
export function back() {
  console.log("调用成功")
}
