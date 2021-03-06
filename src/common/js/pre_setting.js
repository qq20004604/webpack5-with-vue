/**
 * Created by 王冬 on 2021/03/05.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 * 通用配置文件，公共引入的东西都写到这里
 */
import Vue from 'vue';
import forDevelopment from 'plugin/for_development';
import Element from 'element-ui';
import http from '@/api/ajax.js';
import URL from './url';
import 'common/less/config.less'
import 'element-ui/lib/theme-chalk/index.css';

const isProd = process.env.NODE_ENV !== 'development';

const CommonUtils = {
    init () {
        Vue.use(URL)
        Vue.config.productionTip = !isProd
        Vue.use(http)
        // Vue.use(ElementUI)
        // 按需加载
        Vue.use(Element)

        if (!document.getElementById('app')) {
            const DOM = document.createElement('div')
            DOM.id = 'app'
            document.body.append(DOM)
        }

        window.version = process.env.date
        // todo 以后以下这些也归属到开发模式下用
        Vue.use(forDevelopment)
    },
    setTitle (title) {
        const titleDOM = document.getElementsByTagName('title')
        if (titleDOM.length > 0) {
            titleDOM[0].innerText = title;
        }
    }
}

export default CommonUtils;
