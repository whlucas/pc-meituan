<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur"></el-input>
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
    export default {
        data(){
            return {
                searchWord: '',
                isFocus: false,
                hotPlaceList: ['京东第一温泉度假村', '99旅馆连锁', '尚客优快捷酒店'],
                searchList: ['火锅', '火锅自助餐', '火锅 重庆'],
                suggestList: ['京东第一温泉度假村', '99旅馆连锁', '尚客优快捷酒店']
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
            }
        }
    }
</script>

<style lang="sass">
    @import '@/assets/css/public/header/index.scss'
    @import '@/assets/css/public/header/search.scss'
</style>
