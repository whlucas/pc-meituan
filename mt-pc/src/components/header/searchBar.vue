<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur" @input="input"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <!--搜索框的下拉显示,因为显示的里面有一个标题,所以这里用dl-dt/dd来写-->
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜素</dt>
                        <dd v-for="(item, index) in hotPlaceList" :key="index">
                            <!--params是我这个路由地址后面拼接的数据-->
                            <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd v-for="(item, index) in searchList" :key="index">
                            <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                    <dl>
                        <dt></dt>
                        <dd></dd>
                    </dl>
                </div>
                <p class="suggest">
                    <a href="#" v-for="(item, index) in suggestList" :key="index">{{item}}</a>
                </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import api from '@/api/index.js'
    export default {
        data(){
            return {
                searchWord: '',
                isFocus: false,
                searchList: ['火锅', '火锅自助餐', '火锅 重庆'],
                suggestList: [],
                hotPlaceList: []
            }
        },
        computed: {
            isHotPlace() {
                // 当聚焦且没有输入的时候才展示
                return this.isFocus && !this.searchWord;
            },
            isSearchList: function(){
                // 聚焦且输入数据时候显示
                return this.isFocus && this.searchWord
            }
        },
        methods: {
            focus() {
                this.isFocus = true;
            },
            blur() {
                // 由于我点击里面的东西的时候,没有在input里面点,先触发blur,这个框就没了,就不会触发跳转
                // 所以要给这个blur的方法加一个延迟
                let self = this;
                setTimeout(() => {
                    // 如果不用self,我这个setTimeout里面的this指向window
                    self.isFocus = false;
                }, 200)
            },
            // 这里在输入框里面加一个input事件,用来请求数据
            input() {
                console.log(this.searchWord);
                // axios.get('http://api.duyiedu.com/api/meituan/header/search.json',{
                //     params:{
                //         appkey: '1213372700_1548489954031'
                //     }
                // }).then(res => {
                //     console.log(res);
                // })

                // 这样写是可以请求回来数据的,但是我每次都这样重复输入appkey看起来特别冗余,需要封装一下,这里axios给我提供了一个拦截器,需要在全局新建一个axios.js文件配置一下
                // 配置好了以后就不用每次都写appkey了

                // 这里先拿一个东西存一下,因为函数里面要用
                let value = this.searchWord;
                api.getSearchList().then(res => {
                    console.log(res);
                    // 这里要过滤一下
                    this.searchList = res.data.data.list.filter((item, index) => {
                        // 我搜索的东西恰巧在给我的数据里面就返回
                        return item.indexOf(value) > -1;
                    });
                })

                // 我想在想在一个文件里面看到我所有的请求,就需要封装一下了,在根目录下面来一个api目录,里面来一个js文件,我把所有的请求都写在这个文件里面,当我需要调用接口的时候,只需要调用我这个文件里面的方法就可以了
            }
        },

        // 之前有一个vue-resource,vue团队开发的,但是现在不用了

        // 我现在要用axios发送请求获取数据,他的特点是基于promise的,可以把数据自动的转化为json
        // 用之前要npm install axios --save 这个要加-- save没说清楚为啥
        // 然后import axios from 'axios'  // 如果我在根目录里面对axios进行了配置就,引入配置了的axios文件
        // 在这里我调用是api.js,我把所有的结构都放在这个js文件里面,方便管理,调用的时候只需要调用这个api里面的方法
        // 如果希望在dom创建完事之后发送数据就在mounted里面请求数据
        // 如果希望在创建这个组件的时候就获取这个数据就在create里面获取
        created() {
            // 看一下接口所需要的请求类型是get还是post
            // ()里面写地址,然后调用then方法打印一下获取的数据
            // 我直接写'/api/meituan/header/searchHotWords.json'这个地址肯定是拿不到数据的因为我这个页面跑在哪就会去哪个服务器去找,我这个本地的服务器上肯定是没有的
            // 我希望去平台上面去找,我就把这个平台的域名放在前面
            // 由于后端的要求我还得给后端传一个appKey才能获取到数据,所以我们的给后端传参数,传参数在axios的第二个参数里面传,第二个参数可以传一个对象,这个对象里面有一个params,这个params里面就是我们所有传给后端的参数

            // 这个是最基础的写法
            // axios.get('http://api.duyiedu.com/api/meituan/header/searchHotWords.json',{
            //     params: {
            //         appkey: '1213372700_1548489954031'
            //     }
            // }).then(res => {
            //     // 我这个res就是我请求回来的数据,只要用这个里面的数据进行赋值就可以了
            //     this.hotPlaceList = res.data.data;
            //     this.suggestList = res.data.data;
            // })

            // 在api文件夹里面封装好了之后可以直接调用
            api.searchHotWords().then(res => {
                // 我这个res就是我请求回来的数据,只要用这个里面的数据进行赋值就可以了
                this.hotPlaceList = res.data.data;
                this.suggestList = res.data.data;
            })
        }
    }
</script>

<style lang="sass">
    @import '@/assets/css/public/header/index.scss'
    @import '@/assets/css/public/header/search.scss'
</style>
