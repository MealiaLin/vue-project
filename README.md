# vue-project

> 基于vue+webpack+mint-ui搭建的H5框架

## 项目安装相关指令

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

目录结构
<pre>
    ├── build                               构建工具配置脚本
    ├── config                              构建和打包配置脚本
    ├── dist                                发布环境
    ├── node-modules                        node依赖库
    ├── src                                 源代码
    │    ├── assets                        资源目录
    │    │   ├── css                       层叠样式
    │    │   ├── images                    图片
    │    ├── components                     所有组件文件
    │    │   ├── ...
    │    ├── router                         路由js文件
    │    ├── store                          Vuex状态管理
    │    │   ├── ...
    │    ├── utils                          自定义公用的方法封装
    │    │     │
    │    │     ├── api.js                  所有的自定义指令
    │    │     │   ├── ...
    │    │     ├── bus.js                  简单组件通信总线
    │    │     │   ├── ...
    │    │     ├── cookie.js               所有的自定义filter
    │    │     │   ├── ...
    │    │     ├── util.js                 自定义拦截器
    │    │     ├── ...
    │    ├── app.vue                       入口组件
    │    ├── main.js                       入口函数
    ├── static                              静态资源
    │    ├── mui                           mint-UI、iconfont等插件存放处
    │    ├── ...                           资源目录
    ├── package.json                        npm包描述文件
    ├── package-lock.json                   控制npm更新依赖，往往会造成很多不便，可删除
    ├── index.html                          html
    ├── README.md                           项目描述
    └──
</pre>
