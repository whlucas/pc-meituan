<template>
    <div>
        <div class="page-login">
            <div class="login-header">
                <a class="logo" href="http://www.meituan.com" />
            </div>
            <div class="login-panel">
                <div class="banner">
                    <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
                </div>
                <div class="form">
                    <!--状态信息的标签-->
                    <h4 v-if="error" class="tips">{{error}}</h4>
                    <p>
                        <span>
                            账号登录
                        </span>
                    </p>

                    <!--这个perfi-icon是在头部加东西,冒号里面是加的图标,profile就是在css里面写好的类名,也可以在elementUI图标样式库里面找-->
                    <!--当error有值且userName不存在的时候添加class名error-->
                    <el-input :class="{error: error && !userName}" v-model="userName" placeholder="手机号/用户名/邮箱" prefix-icon="profile"></el-input>
                    <!--这个type是elementUI里面隐藏密码的属性-->
                    <el-input :class="{error: error && !password}" v-model="password" type="password" placeholder="密码" prefix-icon="password"></el-input>
                    <div class="foot">
                        <a href="#">忘记密码?</a>
                    </div>
                    <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
                    <p class="reg">
                        <span>还没有账号</span>
                        <router-link :to="{name: 'register'}">免费注册</router-link>
                    </p>
                    <!--这里一大串都是直接在人家官网copy的-->
                    <div class="oauth-wrapper">
                        <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
                        <div class="oauth cf">
                            <a class="oauth__link oauth__link--qq" href="/account/connect/tencent" data-mtevent="{&quot;la&quot;:&quot;oauth/qq&quot;}" target="_blank"></a>
                            <a class="oauth__link oauth__link--weibo" href="/account/connect/sina" data-mtevent="{&quot;la&quot;:&quot;oauth/sina&quot;}" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <ul>
                    <li>
                        <a href="#">关于美团</a>
                    </li>
                    <li>
                        <a href="#">加入我们</a>
                    </li>
                    <li>
                        <a href="#">商家入驻</a>
                    </li>
                    <li>
                        <a href="#">帮助中心</a>
                    </li>
                    <li>
                        <a href="#">美团手机版</a>
                    </li>
                </ul>
                <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
            </footer>
        </div>
    </div>
</template>

<script>
    import api from '@/api/index.js'
    export default {
        data() {
            return{
                userName: '',
                password: '',
                error: ''
            }
        },
        methods: {
            submit() {
                if(!this.userName){
                    this.error = '请输入账号';
                    return false;
                }
                if(!this.password){
                    this.error = '请输入密码';
                    return false;
                }
                // 如果都不是都有值,那就调用接口
                // 这里传参数由于接口那边的params没有包括号,这边就要把参数嵌套在params属性里面
                api.login({
                    params: {
                        userName: this.userName,
                        password: this.password
                    }
                }).then((res) => {
                    // 如果验证成功就跳转页面
                    if (res.data.status === 'success'){
                        this.$router.push({name: 'index'})

                        // 如果登录了,我需要把我的用户名显示在相应的地方,所以需要把用户名存到vuex里面
                        // 这个修改值的方法没有放到actions里面,所以就可以直接用conmit来传
                        this.$store.commit('setUserName', this.userName)
                    }else {
                        // 如果没有验证成功就提示错误信息
                        this.error = res.data.msg
                    }
                })

            }
        }
    }
</script>

<style lang="scss">
    @import "@/assets/css/login/index.scss";
</style>
