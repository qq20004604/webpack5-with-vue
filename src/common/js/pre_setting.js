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
import 'common/less/config.less';
import 'element-ui/lib/theme-chalk/index.css';
import WtiForm from 'wti-form';
import 'wti-form-themes-red';

const isProd = process.env.NODE_ENV !== 'development';

const CommonUtils = {
    init () {
        Vue.use(URL);
        Vue.config.productionTip = !isProd;
        Vue.use(http);
        // Vue.use(ElementUI)
        // 按需加载
        Vue.use(Element);
        const props = {
            dynamicSelectOption: {
                type: Object,
                default: () => ({
                    // 这是字典接口的 url
                    dictUrl: `${baseURL}/dict`,
                    // 异步请求时，请求内容是一个对象或一个数组。
                    // 如果是对象，那么包含一个 key 和一个数组。
                    // 如果是数组，那么只有这个数组。
                    // 数组是所有字典 FormItem 的 parentKey 的集合
                    queryKey: 'search', // 这是请求时那个 key。如果为空，则请求时是一个数组，而不是一个对象
                    parentKey: 'parentKey', // 这是返回结果的 parentKey。意思是，同一个 parentKey 归属于同一个下拉框选项
                    value: 'code', // 这是下拉框选项的值
                    label: 'label' // 这是下拉框选项的 label
                })
            }
        };
        Vue.use(WtiForm, props);

        if (!document.getElementById('app')) {
            const DOM = document.createElement('div');
            DOM.id = 'app';
            document.body.append(DOM);
        }

        window.version = process.env.date;
        // todo 以后以下这些也归属到开发模式下用
        Vue.use(forDevelopment);
    },
    setTitle (title) {
        const titleDOM = document.getElementsByTagName('title');
        if (titleDOM.length > 0) {
            titleDOM[0].innerText = title;
        }
    },
};

export default CommonUtils;
