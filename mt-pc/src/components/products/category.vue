<template>
    <div class="m-product-category">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item) in classicList" :key="item.type">
                <!--这是一个选择器的组件-->
                <MSelect :name="item.title" :list="item.subList"/>
            </dd>
        </dl>
        <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd v-for="(item) in areaList" :key="item.type">
                <!--这是一个选择器的组件-->
                <MSelect :name="item.title" :list="item.subList"/>
            </dd>
        </dl>
    </div>
</template>

<script>
    import MSelect from './select'

    export default {
        data() {
            return {
                classicList: [{
                    "title": "美食",
                    "type": "food",
                    "subList": [{
                        "name": "日本菜",
                        "id": "Japan"
                    }]
                }, {
                    "title": "酒店住宿",
                    "type": "hotal",
                    "subList": [{
                        "name": "温泉酒店",
                        "id": "hot_spring"
                    }]
                }],
                areaList: [{
                    "title": "推荐商圈",
                    "subList": [{
                        "name": "望京",
                        "id": 120000
                    }, {
                        "name": "昌平",
                        "id": 12222
                    }]
                }]
            }
        },
        components: {
            MSelect
        }
    }
</script>

<style scoped>

</style>
