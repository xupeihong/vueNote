<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-md-offset-4 col-xs-offset-3">
                    <div class="login">
                        <h1 class="text-center">登录</h1>
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label for="inputEmail3" class="col-sm-2 control-label">账户</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputEmail3" placeholder="name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-10">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox">记住我
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-10">
                                    <button type="submit" class="btn btn-info">登陆</button>
                                    <!-- <button type="submit" class="btn btn-primary">注册</button> -->
                                    <button type="submit" class="btn btn-info">忘记密码</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Vbutton from './components/Vbutton'
import axios from 'axios'

export default {
    data() {
            return {
                logining: false,
                ruleForm2: {
                    account: 'admin',
                    checkPass: '123456'
                },
                rules2: {
                    account: [{
                            required: true,
                            message: '请输入账号',
                            trigger: 'blur'
                        },
                        //{ validator: validaePass }
                    ],
                    checkPass: [{
                            required: true,
                            message: '请输入密码',
                            trigger: 'blur'
                        },
                        //{ validator: validaePass2 }
                    ]
                },
                checked: true
            };
        },
        methods: {
            handleReset2() {
                this.$refs.ruleForm2.resetFields();
            },
            handleSubmit2(ev) {
                var _this = this;
                this.$refs.ruleForm2.validate((valid) => {
                    if (valid) {
                        //_this.$router.replace('/table');
                        this.logining = true;
                        //NProgress.start();
                        var loginParams = {
                            username: this.ruleForm2.account,
                            password: this.ruleForm2.checkPass
                        };
                        requestLogin(loginParams).then(data => {
                            this.logining = false;
                            //NProgress.done();
                            let {
                                msg,
                                code,
                                user
                            } = data;
                            if (code !== 200) {
                                this.$message({
                                    message: msg,
                                    type: 'error'
                                });
                            } else {
                                sessionStorage.setItem('user', JSON.stringify(user));
                                this.$router.push({
                                    path: '/table'
                                });
                            }
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
}
</script>
<style scoped>
.slide-enter-active {
    transition: all 0.3s 0.3s ease;
}

.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter {
    transform: translateY(-30px);
    opacity: 0;
}

.slide-leave-active {
    transform: translateY(30px);
    opacity: 0;
}

.login {
    margin-top: 50px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 4px;
    box-shadow: 0 0 14px 2px rgba(255, 255, 255, 0.9);
}


</style>
