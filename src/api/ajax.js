/**
 * Created by 王冬 on 2019/5/23.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
import { get, post } from '../config/http';

const $ajax = {
    // 示例
    test (payload) {
        return post('/test', payload);
    },
    testGet (payload) {
        return get('/test', payload);
    },
};

export default {
    install: function (Vue) {
        // 添加方法，可以修改 <title> 标签的内容
        Vue.prototype.$ajax = $ajax;
    }
};

