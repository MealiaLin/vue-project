//存放vuex的核心处理函数

//把将要修改的值发送到mutations.js中---值只允许在mutations.js中修改
export const fun = ({commit}) => {
  commit({
    type: 'getMsg',     //对应mutation.js中的getMsg方法
    msg: '我是修改后的数据...'
  });
};
