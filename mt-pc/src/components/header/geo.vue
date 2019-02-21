<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            {{$store.state.position.name}}
            <router-link class="changeCity" :to="{name:'changeCity'}">
                切换城市
            </router-link>
            [
                <a href="" v-for="(item, index) in nearCity" :key="index">{{  item.name}}</a>
            ]
        </div>
        <div class="m-user">
            <router-link class="login" :to="{name: 'login'}">
                立即登录
            </router-link>
            <router-link class="register" :to="{name: 'register'}">
                注册
            </router-link>
        </div>
    </div>
</template>

<script>
    import api from '@/api/index.js'
    export default {
        data() {
            return {
                nearCity: [],
            }
        },
        // 当我省份变化的时候我的后面的那个城市信息也要跟着变化,所以需要监听一下
        watch: {
            // 监听我的省份的变化
            "$store.state.position": function (){
                // 省份改变的时候拿到改变之后的那个对象里面的城市信息赋值进去
                this.nearCity = this.$store.state.position.nearCity
            }
        },

        // 在这个组件被创建的时候获取一下我的当前地理位置信息
        created() {
            api.getCurrentPosition().then(res => {
                // 这里res.data.data赋进去的是一个对象,里面有很多属性都可以用
                this.$store.dispatch('setPosition', res.data.data);
                this.nearCity = res.data.data.nearCity
            })
        }
    }
</script>

<style >

</style>
