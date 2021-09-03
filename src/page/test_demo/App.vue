<template>
    <div id="app">
        这是一个纯Vue项目，没有vue-router和vuex
        <el-button type="primary" @click="testLogin">ajax测试按钮</el-button>
    </div>
</template>
<script>
    export default {
        created () {
            window.app = this;
        },
        name: 'App',
        methods: {
            testLogin () {
                this.$ajax.test({
                    taskStatus: '0',
                    pageCurrent: 1,
                    pageSize: 10
                }).then(result => {
                    console.log(result);
                }).catch(err => {
                    console.log(`err:${err}`);
                });
            }
            // test_post () {
            //     const data = {
            //         a: 1
            //     };
            //     this.$ajax.test_post(data).then(result => {
            //         console.log(result);
            //     }).catch(err => {
            //         console.log(`err:${err}`);
            //     });
            // }
        }
    };
</script>
<style lang="less" type="text/less">
    @import '~common/css/reset.css';
</style>

