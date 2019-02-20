<template>
    <div>
        <span class="name">按省份选择:</span>
        <!--我现在有一个需求是,这个两个组件只能显示一个,点一个另外一个就会消失,需要让这两个组件产生联系,第一种方式是父子组件传值的方式,这里实现这一种-->
        <!--需不需要添加class的数据在父级里面改变,然后传给子组件,父级里面定义一个事件(注意自定义事件要小写)在子组件里面触发-->
        <!--还有一个需求是子组件选择一个城市或者省份就切换成哪一个省份,需要子组件点击后触发父组件的事件,改变父组件里面的值在传回给子组件-->
        <m-select :list="provinceList" title="省份" :value="province" :showWrapperActive="provinceActive"
                  @change_active="changeProvinceActive"
                  @change="changeProvince"/>
        <m-select :list="cityList" title="城市" :value="city" :showWrapperActive="cityActive"
                  @change_active="changeCityActive"
                  @change="changeCity"/>
        <span>直接搜索: </span>
        <el-select
                v-model="searchWord"
                filterable
                remote
                reserve-keyword
                placeholder="请输入关键词"
                :remote-method="remoteMethod"
                :loading="loading">
            <el-option
                    v-for="item in searchList"
                    :key="item"
                    :label="item"
                    :value="item">
            </el-option>
        </el-select>
    </div>
</template>

<script>
    import MSelect from './select.vue'
    import api from '@/api/index.js'
    export default {
        components: {
            MSelect
        },
        data() {
            return {
                provinceList: ["山东", "甘肃", "黑龙江", "浙江", "新疆", "辽宁"],
                province: "省份",
                cityList: ["哈尔滨", "克拉玛依", "乌鲁木齐", "喀什", "牡丹江", "鹤岗"],
                city: "城市",
                provinceActive: false,
                cityActive: false,
                searchList: ["哈尔滨", "克拉玛依", "乌鲁木齐", "喀什", "牡丹江", "鹤岗"],
                searchWord: '',
                loading: false
            }
        },
        created() {
            api.getProvinceList().then(res => {
                this.provinceList = res.data.data;
            })
        },
        methods: {
            changeProvinceActive(flag) {
                this.provinceActive = flag;
                // 需要实现相互切换的时候只要在这个里面判断一下
                if (flag) { // 当我传古来的值是true的时候,让cityActive这个值是false就行
                    this.cityActive = false
                }
            },
            changeCityActive(flag) {
                this.cityActive = flag;
                if (flag) {
                    this.provinceActive = false
                }
            },
            remoteMethod(e) {
                // 这个e就是我输入的值,把这个值发给后端,后端给我们返回相应的值
                console.log(e)
            },
            changeProvince(value) {
                this.province = value
            },
            changeCity(value) {
                this.city = value
            },
        }
    }
</script>

<style lang="scss">

</style>
