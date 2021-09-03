/**
 * Created by 王冬 on 2020/11/12.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */

const URL = {
    // 基于 url 和 kv 对象。生成一个 search 字符串。（不包含 hash 部分）
    // 如果不想要某些字段，那么仿照示例 1 来给数据
    // 示例1：url = '/abc', kvObj = {a:'123', b:'test'}，返回字符串 '/url?a=123&b=test'
    // 示例2：url = '/abc?userid=123', kvObj = {a:'123', b:'test'}，返回字符串 '/url?userid=123&a=123&b=test'
    // 示例3：url = '/abc?a=abc', kvObj = {a:'123', b:'test'}，返回字符串 '/url?a=123&b=test'
    makeSearchUrl (url, kvObj) {
        const splitUrl = url.split('?');
        const BaseUrl = splitUrl[0]; // 示例 3 这里获得 '/abc'
        const kvUrl = splitUrl[1];
        const originKvObj = {};
        // 如果 kvUrl 不为空，说明可能存在 search 字符串。
        // 那么 先要排除 hash 部分
        if (kvUrl) {
            const withoutHash = kvUrl.split('#')[0];
            // 不为 0，那么才有继续的必要
            if (withoutHash.length !== 0) {
                const kvList = withoutHash.split('&');
                kvList.forEach(kv => {
                    const k = kv.split('=')[0];
                    const v = kv.split('=')[1];
                    // 转义后赋值（把 url 编码转非 url 编码），比如 "%E7%94%A8%E6%88%B7%E5%90%8D" 变为 "用户名"
                    originKvObj[decodeURIComponent(k)] = decodeURIComponent(v);
                });
            }
        }
        // 获取一个完整的对象，如果用到同 k，用 kvObj 覆盖他
        const resultKvObj = Object.assign({}, originKvObj, kvObj);
        const resultSearchUrl = Object.keys(resultKvObj).map(key => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(resultKvObj[key])}`;
        }).join('&');
        return `${BaseUrl}?${resultSearchUrl}`;
    },

    makeOnlySearchURL (kvObj) {
        // 获取一个完整的对象，如果用到同 k，用 kvObj 覆盖他
        const resultSearchUrl = Object.keys(kvObj).map(key => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(kvObj[key])}`;
        }).join('&');

        return `${resultSearchUrl}`;
    },

    // 从search字符串里读值
    getFromSearchURL (k) {
        let v = null;
        const searchStr = window.location.search;
        if (searchStr.length > 1) {
            // 先拿到kv数组
            const searchList = searchStr.slice(1).split('&');
            searchList.forEach(kv => {
                const kvList = kv.split('=');
                if (kvList[0] === decodeURIComponent(k)) {
                    v = decodeURIComponent(kvList[1]);
                }
            });
        }
        return v;
    },

    // 读取url中的hash参数
    getHashParameter (key) {
        const params = this.$getHashParams();
        return params[key];
    },

    // 获取hash参数对像
    getHashParams () {
        const arr = (location.hash || '').replace(/^#/, '').split('&');
        const params = {};
        for (let i = 0; i < arr.length; i++) {
            const data = arr[i].split('=');
            if (data.length === 2) {
                params[data[0]] = data[1];
            }
        }
        return params;
    },
    // url写入hash参数
    setHashParameter (obj) {
        const params = this.$getHashParams();
        const newParams = Object.assign(params, obj);
        const hashStr = this.$makeOnlySearchURL(newParams);
        location.hash = '#' + hashStr;
    }
};
export default URL;
