//改版store中各种状态的地方

//修改state.msg值 , payload.msg对应actions.js中传过来的值
export const getMsg = (state, payload) => {
  state.msg = payload.msg;
}
