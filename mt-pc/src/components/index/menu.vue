<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <!--触发鼠标移入事件的时候把数据传进去-->
            <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuEnter(item)">
                <i :class="item.icon"></i>
                {{item.title}}
                <span class="arrow"></span>
            </dd>
        </dl>
        <!--如果curDetail有值就显示-->
        <!--为了让鼠标移入这个里面时,这个框不会消失,如果没有这个,当鼠标移开上面那个框的时候这个就框消失了. 再绑定一个离开这个框的时候这个框消失-->
        <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
            <template v-for="(item, index) in curDetail.children">
                <!--templele里面不能有key值, 把key写在h4标签上面-->
                <h4 :key="index">{{item.title}}</h4>
                <span v-for="(v, i) in item.children" :key="v + '-' + i">{{v}}</span>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                // 这个数据作为鼠标移进去需要展示的数据
                curDetail: null,
                menuList:[{
                    title :'美食',
                    icon: 'food',
                    // 二级数据
                    children: [{
                        title: '美食',
                        children: ['代金券', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', '聚餐邀请', '烧烤烤肉']
                    }]
                },
                {
                    title :'外卖',
                    icon: 'takeout',
                    children: [{
                        title: '外卖',
                        children: ['美团外卖']
                    }]
                },
                {
                    title :'酒店',
                    icon: 'hotel',
                    children: [{
                        title: '酒店星级',
                        children: ['舒适三星', '高档四星', '经典型', '豪华/五星']
                    }]
                }]
            }
        },
        methods: {
            menuEnter(item){
                // 当鼠标移进去把这个传进来的数据给我的curDetail
                this.curDetail = item
            },
            menuLeave() {
                let self = this;
                // 过200 毫秒让这个数据清除,防止里面的数据点不到
                this.timer = setTimeout(function() {
                    self.curDetail = null
                }, 200)
            },
            detailEnter(){
                // 进入的时候把这个timer取消掉就不会清除数据,这个框就会一直显示了
                clearTimeout(this.timer)
            },
            detailLeave() {
                this.curDetail = null
            }
        }
    }
</script>

<style>

</style>
