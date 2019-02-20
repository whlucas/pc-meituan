<template>
    <div class="page-changeCity">
        <el-row>
            <province></province>
        </el-row>
        <el-row>
            <hot title="热门城市:" :list="hotList" />
        </el-row>
        <el-row>
            <hot title="最近访问:" :list="recentList" />
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>

<script>
    import Province from '@/components/changeCity/province'
    import Hot from '@/components/changeCity/hot'
    import Category from '@/components/changeCity/category'
    import api from '@/api/index.js'
    export default {
        data() {
            return{
                hotList: [],
                recentList: [],
            }
        },
        created(){
             api.getHotCity().then(res => {
                 // 我只要数据里面的name值,所以遍历一下就返回name就可以了
                 this.hotList = res.data.data.map(item => item.name)
             });
            api.getRecentCity().then(res => {
                this.recentList = res.data.data.map(item => item.name)
            })
        },
        components:{
            Province,
            Hot,
            Category
        }
    }
</script>

<style lang="scss">
    @import "@/assets/css/changecity/iselect.scss";
</style>
