/**
 * Created by 王冬 on 2017/8/6.
 * QQ: 20004604
 * weChat: qq20004604
 * 开发模式使用，当data有name属性时，即可通过window[name]来访问该组件
 */

export default {
    install: function (Vue) {
        Vue.mixin({
            created () {
                if (this.$options.name) {
                    window[this.$options.name] = this;
                }
            }

        });

        // 添加方法，可以修改 <title> 标签的内容
        Vue.prototype.$setPageTitle = function (title) {
            document.getElementsByTagName('title')[0].innerText = title;
        };
    }
};
