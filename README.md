# my-project

> 基于vue mint-ui搭建的移动H5框架

## Build Setup

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
    │    ├── assets                         资源目录
    │    │   ├── css                        层叠样式  
    │    │   ├── images                     图片  
    │    ├── components                     所有组件文件
    │    │   ├── common                     可复用的公用的组件（主要是类似header,footer）
    │    │   ├── pages                      应用的页面
    │    │   │   ├── ...                    其他页面
    │    ├── router                         路由js文件
    │    ├── utils                          自定义公用的方法封装
    │    │     │   
    │    │     ├── api.js                   所有的自定义指令
    │    │     │   ├── ...
    │    │     ├── cookie.js                所有的自定义filter
    │    │     │   ├── ...
    │    │     ├── util.js                  自定义拦截器
    │    │     ├── ...
    │    ├── app.vue                        入口组件
    │    ├── main.js                        入口函数
    ├── static                              静态资源
    ├── package.json                        npm包描述文件
    ├── index.html                          html
    ├── README.md                           项目描述
    └──
</pre>