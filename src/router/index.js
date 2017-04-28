import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Vmain from '@/components/Vmain'
import Vnote from '@/components/Vnote'
import Vabout from '@/components/Vabout'
//页面中路由分配规则在此设置
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Vmain',
        component: Vmain
    }, {
        path: '/note',
        name: 'Vnote',
        component: Vnote
    }, {
        path: '/about',
        name: 'Vabout',
        component: Vabout
    }]
})
