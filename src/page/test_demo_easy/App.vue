<template>
    <div id="app">
        <el-button type="primary">
            455621114
        </el-button>
        <img :src="imgurl"
             alt=""
             class="img"/>
        <!--        <Test/>-->
        <div class="bk"></div>
    </div>
</template>
<script>
    const i1 = require('../../assets/hill.png')
    // import i2 from '../assets/hill.png';

    console.log(i1)
    // console.log(i2)

    export default {
        name: 'App',
        data () {
            return {
                imgurl: i1
                // imgurl: require('../assets/hill.png')
                // imgurl: ''
                // imgurl: '/src/assets/hill.png'
            }
        },
        computed: {},
        created () {
            window.app = this
        },
        methods: {
            test_login () {
            }
        }
    }

</script>

<style scoped lang="less">
    #app {
        border: 1px solid red;
    }

    .img {
        width: 20px;
        height: 20px;
    }

    .bk {
        width: 20px;
        height: 20px;
        background: url(~assets/hill.png);
        background-size: 100% 100%;
        border: 1px solid red;
    }
</style>
