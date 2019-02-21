<template>
    <div class="page-register">
        <div class="header">
            <header>
                <a href="#" class="site-logo"></a>
                <div class="login">
                    <span>已有美团账号?</span>
                    <router-link :to="{name: 'login'}">登录</router-link>
                </div>
            </header>
        </div>
        <div class="content">
            <!--这个表单直接在elementUI里面copy-->
            <el-form :model="registerForm" status-icon :rules="rules2" ref="registerForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="userName">
                    <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
                    <!--这是那个密码强中弱的状态,他由前后两个div组成-->
                    <div class="pw-strength">
                        <!--这是那个动画的div-->
                        <div class="bar"></div>
                        <div class="letter">
                            <span>弱</span>
                            <span>中</span>
                            <span>强</span>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="确认密码" prop="rePassword">
                    <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
        <footer></footer>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                registerForm: {
                    userName: '',
                    password: '',
                    rePassword: ''
                }
            }
        },
        methods: {
            submitForm() {

            }
        }
    }

</script>

<style lang="scss">
    @import "@/assets/css/register/index.scss";
</style>
