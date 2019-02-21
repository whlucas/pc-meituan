<template>
    <div>
        <span class="name">按省份选择:</span>
        <!--我现在有一个需求是,这个两个组件只能显示一个,点一个另外一个就会消失,需要让这两个组件产生联系,第一种方式是父子组件传值的方式,这里实现这一种-->
        <!--需不需要添加class的数据在父级里面改变,然后传给子组件,父级里面定义一个事件(注意自定义事件要小写)在子组件里面触发-->
        <!--还有一个需求是子组件选择一个城市或者省份就切换成哪一个省份,需要子组件点击后触发父组件的事件,改变父组件里面的值在传回给子组件-->
        <m-select :list="provinceList" title="省份" :value="province" :showWrapperActive="provinceActive"
                  @change_active="changeProvinceActive"
                  @change="changeProvince"
                  className="province"/>
        <!--:disabled控制可不可以点击-->
        <m-select :list="cityList" title="城市" :value="city" :showWrapperActive="cityActive"
                  @change_active="changeCityActive"
                  @change="changeCity"
                  :disabled="cityDisabled"
                  className="city"/>
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
                cityList: [],
                city: "城市",
                provinceActive: false,
                cityActive: false,
                searchList: ["哈尔滨", "克拉玛依", "乌鲁木齐", "喀什", "牡丹江", "鹤岗"],
                searchWord: '',
                loading: false,
                cityDisabled: true
            }
        },
        created() {
            api.getProvinceList().then(res => {
                this.provinceList = res.data.data.map((item) => {
                    // 由于我的插件里面用到的是name,而插件需要重复利用,不能改,所以要配置数据来适应插件
                    // 这里把属性名provinceName改成name
                    item.name = item.provinceName;
                    // 注意要记得返回
                    return item;
                })
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
            changeProvince(item) {
                // 改变省份的时候让选择城市可以点击
                this.cityDisabled = false;
                this.province = item.name;
                // 点击了之后我的这个cityList的值就变成了我点的那个里面的值了
                this.cityList = item.cityInfoList;
            },
            changeCity(item) {
                this.city = item.name;

                // 点击城市的时候,在最上方做一个城市的切换,需要修改store里面的数据
                this.$store.dispatch('setPosition', item);

                // 点击完事了以后我要跳转页面如何实现,直接用$route.push这个方法,后面接要跳转的页面
                this.$router.push({name: 'index'})
            },
        }
    }
</script>

<style lang="scss">

</style>
