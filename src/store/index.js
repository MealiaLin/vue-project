// 文件都会汇聚到这个地方来,也是创建store对象的地方,就像store的入口一样

import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
import state from './rootState';
Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
export default store;
