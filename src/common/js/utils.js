import ajax from '../../api/ajax.js';
import el from 'element-ui/src/locale/lang/el';

export {
    numberFormat,
    numberUnitBig,
    keyToImg,
    permissions,
    idCheck,
    formatMobile,
    CertificateNumber,
    parameter
    // keyToCode
};

// 传参方法，把字符串转成对象传过去
const parameter = (n) => {
    if (!n) return '';
    let url = '';
    let num = '';
    for (let k in n) {
        let value = n[k] !== undefined ? n[k] : '';
        url += '&' + k + '=' + encodeURIComponent(value);
        num = url ? url.substring(1) : '';
    }
    return num;
};
/**
 * 格式化证件号：前面留六位，后面一位，中间****号代替
 * @param {String} n 手机号，必须
 * @return {String} 返回格式化后的号码，如：610330**********8
 * */
const CertificateNumber = (n) => {
    if (!n) return '';
    let reg = /^(\d{6})\d*(\d{1})$/;
    let num = ('' + n).replace(reg, '$1****$2');
    return num;
};
/**
 * 格式化手机号：前面留三位，后面四位，中间****号代替
 * @param {String} n 手机号，必须
 * @return {String} 返回格式化后的号码，如：188****8888
 * */
const formatMobile = (n) => {
    // 无值。或者非数字、字符串，那么返回 -
    if (!n || (typeof n !== 'string' && typeof n !== 'number')) {
        return '-';
    }
    // 将数字转为字符串
    let s = String(n);
    return s.slice(0, 3) + '****' + s.slice(-4);
};
/**
 * 给数字增加千分号
 * @param {*} num
 */
const numberFormat = (n) => {
    if (n === undefined) return '';
    let num = n.toString();
    let decimals = '00';
    // 判断是否有小数
    num.indexOf('.') > -1 ? (decimals = num.split('.')[1].toString()
        .substr(0, 2)) : decimals;
    let len = num.length;
    if (len <= 3) {
        return num;
    } else {
        let temp = '';
        let remainder = len % 3;
        decimals ? (temp = '.' + decimals) : temp;
        if (remainder > 0) {
            // 不是3的整数倍
            return (
                num.slice(0, remainder) +
                ',' +
                num.slice(remainder, len).match(/\d{3}/g).join(',') +
                temp
            );
        } else {
            // 是3的整数倍
            return num.slice(0, len).match(/\d{3}/g).join(',') + temp;
        }
    }
};
const keyToImg = (n) => {
    // console.log(serverList.file + '/file/getFile?key=' + n + '');
    return '/fileapi/file/getFile?key=' + n + '';
};
const numberUnitBig = (n) => {
    if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) {
        return '数据非法'; // 判断数据是否大于0
    }

    // eslint-disable-next-line one-let
    let unit = '千百拾亿千百拾万千百拾元角分';
    let str = '';
    n += '00';

    let indexpoint = n.indexOf('.'); // 如果是小数，截取小数点前面的位数

    if (indexpoint >= 0) {
        n = n.substring(0, indexpoint) + n.substr(indexpoint + 1, 2); // 若为小数，截取需要使用的unit单位
    }

    unit = unit.substr(unit.length - n.length); // 若为整数，截取需要使用的unit单位
    for (let i = 0; i < n.length; i++) {
        str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i); // 遍历转化为大写的数字
    }

    return str
        .replace(/零(千|百|拾|角)/g, '零')
        .replace(/(零)+/g, '零')
        .replace(/零(万|亿|元)/g, '$1')
        .replace(/(亿)万|壹(拾)/g, '$1$2')
        .replace(/^元零?|零分/g, '')
        .replace(/元$/g, '元整'); // 替换掉数字里面的零字符，得到结果
};
/**
 * 权限控制
 * @param {*} key
 */
let uaa = null;
const permissions = (key) => {
    // console.log(key);
    let bl = false;
    if (uaa === null) {
        if (sessionStorage.getItem('wti-manager-uaa')) {
            uaa = JSON.parse(sessionStorage.getItem('wti-manager-uaa'));
        } else {
            uaa = [];
        }
    }
    uaa.map((data) => {
        if (data.menuCode === key) {
            bl = true;
        }
    });
    return bl;
    // let level = key.length / 2;
    // let length = 2;
    // let arr = JSON.parse(sessionStorage.getItem('wti-manager-uaa')).sysUserPermissionS;
    // while (level > 0) {
    //     let _key = key.substr(0, length);
    //     let _arr = null;
    //     arr.map((data) => {
    //         if (data.menuCode == _key) {
    //             _arr = data.sysPermissionDTOList;
    //         }
    //     });
    //     if (_arr) {
    //         arr = _arr;
    //         level--;
    //         length += 2;
    //         if (level == 0) {
    //             return true;
    //         }
    //     } else {
    //         return false;
    //     }
    // }
    // return false;
};
/**
 * 身份证校验
 *
 */
const idCheck = (idNo) => {
    let num = idNo.toUpperCase();
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
    let reg = /^(\d{18,18}|\d{15,15}|\d{17,17}X)$/;
    if (!reg.test(num)) {
        return false;
    }
    // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
    // 下面分别分析出生日期和校验位
    let len, re;
    len = num.length;
    if (len === 15) {
        re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
        let arrSplit = num.match(re);
        // 检查生日日期是否正确
        let dtmBirth = new Date(
            '19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
        let bGoodDay;
        bGoodDay =
            dtmBirth.getYear() === Number(arrSplit[2]) &&
            dtmBirth.getMonth() + 1 === Number(arrSplit[3]) &&
            dtmBirth.getDate() === Number(arrSplit[4]);
        if (!bGoodDay) {
            return false;
        }
    }
    if (len === 18) {
        re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
        let arrSplit = num.match(re);
        // 检查生日日期是否正确
        let dtmBirth = new Date(
            arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
        let bGoodDay;
        bGoodDay =
            dtmBirth.getFullYear() === Number(arrSplit[2]) &&
            dtmBirth.getMonth() + 1 === Number(arrSplit[3]) &&
            dtmBirth.getDate() === Number(arrSplit[4]);
        if (!bGoodDay) {
            return false;
        } else {
            // 检验18位身份证的校验码是否正确。
            // 校验位按照ISO 7064:1983.MOD
            // 11-2的规定生成，X可以认为是数字10。
            let valnum;
            // eslint-disable-next-line no-array-constructor
            let arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5,
                8, 4, 2);
            // eslint-disable-next-line no-array-constructor
            let arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4',
                '3', '2');
            // eslint-disable-next-line one-let
            let nTemp = 0;
            for (let i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            valnum = arrCh[nTemp % 11];
            if (valnum !== num.substr(17, 1)) {
                return false;
            }
        }
    }
    return true;
};
