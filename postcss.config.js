/**
 * Created by 王冬 on 2021/3/6.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
module.exports = {
    plugins: {
        // 兼容浏览器，添加前缀
        'autoprefixer': {
            overrideBrowserslist: [
                'Android 4.1',
                'iOS 7.1',
                'Chrome > 31',
                'ff > 31',
                'ie >= 8',
                '>0.01%'
                //'last 10 versions', // 所有主流浏览器最近2个版本
            ]
        }
    }
};
