/**
 * Created by 王冬 on 2021/1/5.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
let a = 1;
a = a + 1;
console.log(a);
const fn = (m) => {
    return m + 1;
};
window.b = fn(a);

class Test {
    a = 0;

    set (v) {
        console.log('set v', v);
        this.a = v + 1;
    }

    get () {
        console.log('get v', this.a);
        return this.a;
    }
}

const b = new Test();
b.set(3);
console.log(b.get());
