/**
 * Created by 王冬 on 2019/5/23.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
import axios from 'axios';
import { baseURL } from './env.js';
// 是否启用使用form表单形式提交数据，默认不启用
const USE_FORM = false;

axios.defaults.baseURL = baseURL;
// 使用form-data形式提交数据
if (USE_FORM) {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.headers.post['Accept'] = 'application/x-www-form-urlencoded';
    axios.defaults.headers.get['Accept'] = 'application/x-www-form-urlencoded';

    axios.defaults.transformRequest = [
        function (data) {
            let ret = '';
            for (const it in data) {
                ret += encodeURIComponent(it) + '=' +
                    encodeURIComponent(data[it]) + '&';
            }
            ret = ret.slice(0, -1);
            return ret;
        },
    ];
}

const post = (url, data) => {
    return axios({
        method: 'post',
        url,
        data,
    });
};

const get = (url, params) => {
    return axios({
        method: 'get',
        url,
        params,
    });
};

// 生成 axios 对象
function generateAxios (config) {
    const newAxios = axios.create(config);
    newAxios.interceptors.request.use(requestSuccess, requestFault);
    newAxios.interceptors.response.use(responseSuccess, responseFault);
    return newAxios;
}

export { post, get, baseURL, generateAxios };
