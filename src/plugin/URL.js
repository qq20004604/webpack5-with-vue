/**
 * Created by 王冬 on 2020/11/12.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
import URL from '@/common/js/url';

export default {
    install: function (Vue) {
        // 添加方法，可以修改 <title> 标签的内容
        Vue.prototype.$makeSearchUrl = URL.makeSearchUrl;
        Vue.prototype.$getFromSearchURL = URL.getFromSearchURL;
        Vue.prototype.$makeOnlySearchURL = URL.makeOnlySearchURL;
        Vue.prototype.$getHashParameter = URL.getHashParameter;
        Vue.prototype.$setHashParameter = URL.setHashParameter;
        Vue.prototype.$getHashParams = URL.getHashParams;
    }
};
