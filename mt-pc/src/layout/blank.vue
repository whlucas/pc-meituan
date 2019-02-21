<template>
    <!--这个作为登录和注册页面的模板页面-->
    <div class="layout-blank">
        <!--因为登录和注册都需要用这两个页面,所以要用router-view-->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "blank"
    }
</script>

<style scoped>

</style>
