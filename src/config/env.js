// api请求基路径
let baseURL = '';
// 图片url基路径
let imgURL = '';
const isProd = process.env.NODE_ENV !== 'development';

if (!isProd) { // 开发环境
    baseURL = '/api';
    imgURL = '/fileapi';
} else { // 生产环境
    baseURL = '/api';
}

export {
    baseURL,
    imgURL
};
