import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "@/components/home/Home.vue";
import List from "@/components/list/List.vue";

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path:'/list', component: List},
    {path: '*', redirect: '/'},  //默认跳转
];

const router = new VueRouter({
    mode: 'history',  //将hash模式改为history
    routes: routes  //相当于routes: routes
});

export default router;

