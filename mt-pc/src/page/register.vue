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
            <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="userName">
                    <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <!--这里加一个input事件,作为强中弱效果触发-->
                    <el-input type="password" v-model="registerForm.password" autocomplete="off" @input="input"></el-input>
                    <!--这是那个密码强中弱的状态,他由前后两个div组成-->
                    <div class="pw-strength">
                        <!--这是那个动画的div-->
                        <!--动态给他添加类名,改变他的强中弱状态-->
                        <div :class="['bar', strengthClass]"></div>
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
    import api from '@/api/index.js'
    export default {
        data() {
            let validateUser = (rule, value, callback) => {
                console.log(value);
                if(value === ''){
                    callback(new Error('请输用户名'));
                }else if (value.length < 4 || value.length > 16){
                    callback(new Error('用户名必须为6-16位的字母数字下划线组成'));
                }else{
                    callback();
                }
            };
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }else {
                    // 这个不知道啥意思
                    // if (this.registerForm.rePassword !== '') {
                    //     this.$refs.registerForm.validateField('rePassword');
                    // }
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                console.log(value, this.registerForm.password);
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.registerForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return{
                // 注册需要用到的数据
                registerForm: {
                    userName: '',
                    password: '',
                    rePassword: ''
                },
                strengthClass: '',
                rules: {
                    // 这里的属性值要和标签里面的对应起来
                    userName: [
                        {validator: validateUser, trigger: "blur"}
                    ],
                    password: [
                        {validator: validatePass, trigger: 'blur' }
                    ],
                    rePassword: [
                        {validator: validatePass2, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            // 提交验证
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // 如果验证通过了,这个valid就是true,我就向后端请求数据
                        api.register({
                            // 这里是向后端传数据
                            params: this.registerForm
                        }).then(res => {
                            // 如果成功了就跳转,失败了就弹窗
                            if (res.data.status === 'success'){
                                this.$router.push({name: 'login'})
                            }else {
                                alert(res.data.msg);
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            input() {
                // 通过判断密码的长度和内容来动态的添加类名
                // 动画效果是因为加了css3属性transition
                let regStr = /(\w)+/g;
                let regNum = /(\d)+/g;
                let reg = /_/g;
                let strength = this.registerForm.password.match(regStr) && this.registerForm.password.match(regNum) && this.registerForm.password.match(reg);
                if (this.registerForm.password.length > 20 || this.registerForm.password.length > 6 && strength){
                    this.strengthClass = 'strong'
                }else if (this.registerForm.password.length < 6) {
                    this.strengthClass = 'weak'
                }else if (!this.registerForm.password){
                    this.strengthClass = ''
                } else{
                    this.strengthClass = 'normal'
                }
            }
        }
    }

</script>

<style lang="scss">
    @import "@/assets/css/register/index.scss";
</style>
