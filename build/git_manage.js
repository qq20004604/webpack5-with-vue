/**
 * Created by 王冬 on 2020/12/10.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
const fs = require('fs');
const path = require('path');
const {
    exec,
    execSync,
} = require('child_process');

const CWD = process.cwd();

const CMD = function (cmdstr) {
    return new Promise((resolve, reject) => {
        exec(cmdstr, 'utf8', (err, stdout, stderr) => {
            if (err) {
                console.log('---------------exec err---------------');
                return reject(err);
            }
            if (stderr) {
                console.log('---------------exec stderr---------------');
                return reject(stderr);
            }
            console.log(`---------------【${cmdstr}】输出结果---------------`);
            resolve(stdout.trim());
        });
    });
};
const CMDSync = function (cmdstr) {
    const result = execSync(cmdstr, {
        encoding: 'utf8',
    });
    return result.trim();
};

class GitManager {
    // tag 名列表
    tagNameList = [];

    // tag 文件路径的列表
    tagPathList = [];

    // tag 该次的 SHA 值
    tagSHAList = [];

    // tag 匹配规则
    tagRules = [];

    constructor () {
        // 添加默认匹配规则，只有打了类似以下字符串的 tag，才可以被匹配
        // 示例 tag（不含中括号）：【1.0.0】、【11.22.33】、【10.0.0】
        // 错误 tag：【prd_1.0.0】【11.22.33test】、【1.a.1】
        this.addRule(/^\d+\.\d+\.\d+$/);
    }

    // 添加规则，只有符合规则的 tag，才会被检出
    // 可以添加多个规则，目前是，只要符合其中一个即可
    // 当没有规则时，任何 tag 都可以
    // 规则是正则表达式
    addRule (rule) {
        this.tagRules.push(rule);
    }

    // 是否在规则范围内。
    // 当没有规则时，任何 tag 都可以
    isSuitRules () {

    }

    // 读取所有 tag
    readTagsList () {
        // 所有 tag 列表
        this.tagNameList = fs.readdirSync('./.git/refs/tags');
        // 根据 tag 生成 tag 文件的完整文件路径
        this.tagPathList = this.tagNameList.map(tag => {
            return path.join(CWD, './.git/refs/tags', tag);
        });
        this.tagSHAList = this.tagPathList.map(path => {
            const data = fs.readFileSync(path);
            const text = data.toString().trim();
            // console.log('同步读取: ' + text);
            return text;
        });
        console.log(this.tagSHAList);
        CMD('ls').then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        });
    }

    // 获取最新的 tag
    // getLastestTag () {
    //     CMD('git describe --tags `git rev-list --tags --max-count=1`').then(
    //         result => {
    //             console.log(result);
    //         }).catch(err => {
    //     });
    // }
    //
    // // 获得当前提交的 tag，没有 tag 的时候为空
    // getCurrentCommitTag () {
    //     CMD('git tag -l --points-at HEAD').then(result => {
    //         console.log(result);
    //     }).catch(err => {
    //     });
    // }

    // 获得当前提交的 tag，没有 tag 的时候为空（同步版）
    // 只有有符合规则的 tag 时，才会返回
    // 如果有多个符合的，取最后一个（但不可控，不推荐）
    getCurrentCommitTagSync () {
        const tags = CMDSync('git tag -l --points-at HEAD');
        let result = '';
        // 遍历所有 tag
        tags.split('\n').forEach(tag => {
            // 遍历规则
            this.tagRules.forEach(rule => {
                // 使用规则匹配 tag，匹配成功的话（只要有一个规则成功即可），设置该 tag 为输出结果
                if (rule.test(tag)) {
                    result = tag;
                }
            });
        });
        return result;
    }
}

const gitManager = new GitManager();

module.exports.gitManager = gitManager;
