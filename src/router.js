// router
import Vue from 'vue'
import Router from 'vue-router'

import Home from "./views/Home";
import mtt from "./views/mtt";
import Clothing_view from "./views/Clothing";

Vue.use(Router)

export default new Router({
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
        {
            path: '/clothing',
            component: Clothing_view,
            name: 'clothing'
        },
    ],
    /* to get rid of the hash in reload to ensure anchors work correctly; 
    see HTML5 history mode */
    mode: 'history',

    /* closed in #5 */
    scrollBehavior(to) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    }

})