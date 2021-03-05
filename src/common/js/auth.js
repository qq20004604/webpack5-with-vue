/**
 * Created by 王冬 on 2021/2/10.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */

// 引入 vuex
import store from '@/store/index.js';

// vuex 文件里，store 的 state 里面添加 auth 属性，默认值为空对象 {}
// 在 Mutation 属性里 添加这样一个方法：
/*
*   setAuth (state, auth) {
*       state.auth = auth;
*   }
* */

// 使用方法：$store.state.auth['01']
// '01' 是权限的 menuId

const log = (s) => {
    const isProd = process.env.NODE_ENV !== 'development';
    const showLog = !isProd;
    if (showLog) {
        console.log(s);
    }
}

class Authority {
    constructor () {
        this.loadCache();
    }

    loadCache () {
        // 先判断该用户有没有登录
        const isLogin = window.sessionStorage.getItem('wti-manager-token');
        const userId = window.sessionStorage.getItem('wti-userid');
        if (!isLogin || !userId) {
            log('未登录');
            // 没登录就不管，并移除 auth 相关东西
            // （一般来说，不会触发这一个）
            this.resetAuth();
            return;
        }

        // 读取缓存
        let auth = window.sessionStorage.getItem('auth');
        if (!auth) {
            log('无权限 cache');
            // 此时无法正常获取权限列表
        } else {
            // 子页面不判断权限是否过期
            log('加载权限 cache');
            // 此时，一切正常。将缓存的权限数据，转为对象，存到 vuex 里使用
            this.applyAuth(JSON.parse(auth));
        }
    }

    // 删除权限
    resetAuth () {
        window.sessionStorage.removeItem('auth');
        window.sessionStorage.removeItem('auth-expire');
    }

    // 应用权限，即写到 vuex 里
    // 入参是对象
    applyAuth (auth) {
        // 异步请求，拉取权限接口数据
        store.commit('setAuth', auth);
    }
}

const auth = new Authority();

// 在任意一个公共 js 文件里，引入本 js 文件即可。
// 或者在相关页面的 app.js 里，引入本 js 文件。
export default auth;
