<template>
    <!--这里定义一个下拉框-->
    <!--通过disable值来添加类名判断需不需要展示下拉框-->
    <div :class="['choose-wrap', disabled? 'disabled': '']" @click="showWrapper" v-document-click="documentClick">
        <div class="choose">
            <span>{{value}}</span>
            <i class="el-icon-caret-bottom"></i>
            <!--给这div动态添加class类名,其中mt-content是必须要有的样式,直接设置为true, 第二个active为数据驱动-->
            <div :class="{'mt-content': true, 'active': showWrapperActive}">
                <h2>{{title}}</h2>
                <!--依据我传过来的className在css里面设置样式-->
                <div :class="['wrapper', className]">
                    <div class="col" v-for="(listData, index) in renderList" :key="index">
                        <span :class="{'mt-item': true , 'active': item.name === value}"  v-for="(item, index) in listData" :key="index" @click="changeValue(item)">{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // 我现在有一个需求是,这个两个组件只能显示一个,点一个另外一个就会消失,需要让这两个组件产生联系,第一种方式是父子组件传值的方式,这里先实现这一种

        data() {
            return{
            }
        },
        props: [
            "list",
            "title",
            "value",
            "showWrapperActive",
            "disabled",
            "className"
        ],

        // 我需要对我的数据按照列展示,这里需要拿到我的省份数据进行计算
        computed: {
            renderList: function () {
                // 对数据的个数/12向上取整看一下有几列
                let col = Math.ceil(this.list.length / 12);
                let resultList = [];
                for (let i = 0; i < col; i++){
                    // 从原数据里面截取数据
                    let data = this.list.slice(i * 12, i * 12 + 12);
                    resultList.push(data);
                }
                return resultList;
            }
        },
        methods:{
            // 我现在有一个需求是,这个两个组件只能显示一个,点一个另外一个就会消失,需要让这两个组件产生联系,第一种方式是父子组件传值的方式,这里先实现这一种

            // 这里我们点进去展示,但是我想要绑定一个当我点击document的时候他消失,所以需要在document上面绑定事件,这个要现在main.js上面绑定, 然后想要在这里用的时候在想要绑定的标签上面v-我在main.js里面起的名字
            showWrapper(e) {
                // 我想要阻止一下事件冒泡,因为我点击这个框的时候也会点击到document
                e.stopPropagation();
                // 点击的时候判断一下,如果disabled为false才让他触发之后的东西
                if (!this.disabled){
                    // this.showWrapperActive = true
                    // 子组件调用父组件里面的事件
                    this.$emit('change_active', true)
                }
            },
            documentClick() {
                this.$emit('change_active', false)
            },
            changeValue(item) {
                this.$emit('change', item)
            }

        }
    }
</script>

<style lang="scss">
    @import "@/assets/css/changecity/select.scss";
</style>
