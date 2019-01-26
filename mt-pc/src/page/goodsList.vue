<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-col>
                    <category />
                </el-col>
                <el-col>
                    <list></list>
                </el-col>
            </el-col>
            <el-col :span="5">
                map + fav
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Category from "@/components/products/category"
    import Crumbs from '@/components/products/crumbs'
    import List from "@/components/products/list"
    export default {
        components:{
            Crumbs,
            Category,
            List
        }
    }
</script>

<style lang="scss">
    @import '@/assets/css/products/index.scss';
</style>
