// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Login from './Login'
import router from './router'
import Vuex from 'vuex'
import $ from 'jquery'
import axios from 'axios'
import qs from 'qs'
import VueRouter from 'vue-router'
import routes from 'routes'

//1.开启状态管理
//2.使用vuex
Vue.use(Vuex)
    // 3.创建全局可用的大仓库
const store = new Vuex.Store({
    //state相当于整个程序的data，里面的数据不能直接修改，必须在moutations修改
    state: {
        notes: '',
        note: {
            id: '',
            title: '',
            date: '',
            content: ''
        }
    },
    //进化
    mutations: {
        //载荷
        //添加笔记
        addnote(state, note) {
            axios({
                url: 'http://127.0.0.1:3200/api/comments',
                method: 'POST',
                data: {
                    id: note.id,
                    title: note.title,
                    date: note.date,
                    content: note.content
                },
                transformRequest: [function(data) {
                    // 数据格式转换
                    let ret = ''
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }],
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            state.notes.push(note);
            // 将上次的内容清空
            state.note.id = '';
            state.note.title = '';
            state.note.date = '';
            state.note.content = '';
        },
        //选中每条数据
        selectNote(state, note) {
            state.note = note
        },
        //保存笔记
        savenote(state, note) {
            state.note = note;
            // state.notes.push(note)
            // alert(state.note.title);
            // alert(state.note.content);
        }
    }

});


// router.beforeEach((to, from, next) => {
//     //NProgress.start();
//     if (to.path == '/Login') {
//         sessionStorage.removeItem('user');
//     }
//     let user = JSON.parse(sessionStorage.getItem('user'));
//     if (!user && to.path != '/Login') {
//         next({ path: '/Login' })
//     } else {
//         next()
//     }
// })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store, //实例对象的时候，注册大仓库
    // template: '<Login/>',
    template: '<App/>',
    components: { App  }
   
})
