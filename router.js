import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
import home from './src/components/home.vue';
import member from './src/components/member.vue';
import search from './src/components/search.vue';
import shopcar from './src/components/shopcar.vue';
var router = new VueRouter({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: "/home",
        component: home
    }, {
        path: "/member",
        component: member
    }, {
        path: "/search",
        component: search
    }, {
        path: "/shopcar",
        component: shopcar
    }],
    linkActiveClass: 'mui-active' //默认路由高亮类
})

export default router;