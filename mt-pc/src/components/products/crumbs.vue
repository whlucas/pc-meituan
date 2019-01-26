<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <!--这里的地理位置是随着头部的位置改变的,两个组件离得太远,用vuex来传值  后面的那个值可以通过路由来获取,因为我在路由上面拼接了我点击的名字-->
        <el-breadcrumb-item>{{$store.state.position}}{{$route.params.name}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$store.state.position}}{{$route.params.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "crumbs"
    }
</script>

<style lang="scss">

</style>
