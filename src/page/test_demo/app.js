/**
 * Created by 王冬 on 2019-09-05.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 * 1、作为示例提供参考
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import CommonUtils from '@/common/js/pre_setting.js';

// 浏览器的title（就是显示在tag标签的本页面名字）
const TITLE = '测试demo，纯vue';

CommonUtils.setTitle(TITLE);
CommonUtils.init();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});
