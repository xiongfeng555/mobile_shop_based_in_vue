import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
import home from './src/components/home.vue';
import member from './src/components/member.vue';
import search from './src/components/search.vue';
import shopcar from './src/components/shopcar.vue';
import newslist from './src/components/news/NewsList.vue';
import newsinfo from './src/components/news/NewsInfo.vue';
import photoList from './src/components/photo/PhotoList.vue'
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
    }, {
        path: "/home/newslist",
        component: newslist
    }, {
        path: "/home/newsinfo/:id",
        component: newsinfo
    }, {
        path: "/home/photolist",
        component: photoList
    }],
    linkActiveClass: 'mui-active' //默认路由高亮类
})

export default router;