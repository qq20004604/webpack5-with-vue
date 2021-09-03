import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

Vue.use(Vuex);

export default new Vuex.Store({

    // 定义全局状态
    state: {
        dictionary: [],
        auth: {},
    },

    // 定义 getter
    getters,

    // 定义同步提交方法
    mutations,

    // 定义异步操作方法
    actions,
});
