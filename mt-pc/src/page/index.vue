<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu />
            </el-col>
            <el-col :span="19">
                <m-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <!--通过父组件给子组件传值的形式来规定每一个组件的内容-->
                <container :nav="iStyle" />
            </el-col>
        </el-row>
        <!--可以这样多来几个container,就可以插入多个组件-->
        <el-row>
            <el-col :span="24">
                <container :nav="recomment"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    // 同样h5里面有menu插件,不能直接用menu
    import MMenu from '@/components/index/menu'
    import MLife from '@/components/index/life'
    import Container from '@/components/index/container'
    export default {
        data() {
            return{
                // 规定我第一个内容区的内容,把这个数据传给子组件
                iStyle: {
                    // 我可以在每一栏数据都给他动态的起一个名字,为了方便设置每一个组件不一样的颜色,比如每一个都设置一个class名
                    class: 'istyle ',
                    title: '有格调',
                    list: [{
                        text: '全部',
                        tab: 'all'
                    },{
                        text: '约会聚餐',
                        tab: 'food'
                    },{
                        text: '丽人SPA',
                        tab: 'spa'
                    },{
                        text: '电影演出',
                        tab: 'movie'
                    },{
                        text: '品质出游',
                        tab: 'travel'
                    }]
                },
                // 规定我第二个内容区的内容,把这个数据传给子组件
                recomment: {
                    class: 'youhui',
                    title: '很优惠',
                    list: [{
                        text: '全部',
                        tab: 'all'
                    },{
                        text: '美食',
                        tab: 'food'
                    },{
                        text: '休闲',
                        tab: 'xiuxian'
                    }]
                },
            }
        },
        components:{
            MMenu,
            MLife,
            Container
        }
    }
</script>

<style lang="scss">
    @import "@/assets/css/index/index.scss";
</style>
