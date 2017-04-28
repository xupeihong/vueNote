<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">
                        <img alt="Brand" src="./assets/logo.png" height="30">
                    </a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1 ">
                    <ul class="nav navbar-nav acli">
                        <li class="active">
                            <router-link to="/">主页 <span class="sr-only">(current)</span></router-link>
                        </li>
                        <li>
                            <router-link to="/about">关于我</router-link>
                        </li>
                        <li>
                            <router-link to="/note">笔记</router-link>
                        </li>
                    </ul>
                    <form class="navbar-form navbar-left">
                        <!-- <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search">
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button> -->
                    </form>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
        <!--    <Vbutton type='danger' @click="say">文字很多</Vbutton>
        <Vbutton type='info' @click="say">信息按钮</Vbutton> -->
        <!--这里切换主页和笔记页面  -->
        <transition name='slide'>
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Vbutton from './components/Vbutton'
import axios from 'axios'

$(function() {
    $(".acli li").click(function() {
            $(this).addClass("active").siblings().removeClass("active");
        })
        // var str = [];
        // $.ajax({
        //     url: "http://127.0.0.1:3200/api/comments",
        //     type: 'get',
        //     success: function(data1) {
        //         // console.log(data1)
        //         str = data1;
        //     }
        // })
})

export default {
    name: 'app',
    data() {
        return {

        }
    },
    methods: {
        // say() {
        //     alert("点击了按钮")
        // }
    },
    computed: {},
    components: {
        Vbutton

    },
    mounted() {
        axios.get('http://127.0.0.1:3200/api/comments')
            .then(function(response) {
                // console.log(response.data);
                // this指向的问题
                this.$store.state.notes = response.data;
            }.bind(this))
            .catch(function(error) {
                console.log(error);
            });
    }
}
</script>
<style>
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
</style>
