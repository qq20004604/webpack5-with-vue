import { Message } from 'element-ui';

window.isMessageREpate = true;

class User {
    // 登录超时返回处理
    loginExpiration (Info) {
        if (Info.code === 401 && window.isMessageREpate) {
            Message({
                message: '登陆认证已过期,请重新登陆！3 秒后重定向到登录页',
                type: 'warning'
            });
            sessionStorage.clear();
            setTimeout(() => {
                window.top.location.replace('/login.html');
            }, 3000);
            window.isMessageREpate = false;
            return;
        } else if (Info.code !== 200 && Info.code !== 201) {
            window.top.postMessage(
                {
                    message: Info.msg,
                    type: 'warning',
                    wti_type: 'message'
                },
                '*'
            );
        }
    }
}

export default new User();
