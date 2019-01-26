<template>
    <div class="m-product-select">
        <dl class="tab">
            <dt>
                {{name}}
                <i class="el-icon-caret-bottom"></i>
            </dt>
            <dd>
                <dt class="select-title">{{name}}</dt>
                <span v-for="(item, index) in list" :key="index">{{item.name}}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        // 这个组件的很多东西都是传过来的,这里要接收一下
        props:[
            "name",
            "list"
        ]
    }
</script>

<style scoped>

</style>
