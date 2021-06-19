// router
import Vue from 'vue'
import Router from 'vue-router'

import Home from "./views/home";
import mtt from "./views/mtt";

Vue.use(Router)



export default new Router = new Router({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/meet-the-team',
            component: mtt,
            name: 'mtt'
        },
    ]
})