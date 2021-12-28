import { useRandomName } from './../utils/utils';
import provideStore from '@/utils/provideStore';

import {
    createRouter,
    createWebHistory,
    Router,
    RouteRecordRaw,
} from 'vue-router';
import store from '../store';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'LAYOUT',
        redirect: '/HomePage',
        
        component: () => import('../views/layout/index.vue'),
        children: [
            {
                path: 'home',
                name: 'HOME',
                
                component: () => import('../views/Home.vue'),
            },
            {
                path: 'about',
                name: 'ABOUT',
                
                component: () => import('../views/About.vue'),
            },
            {
                path: '/HomePage',
                name: 'HomePage',
                
                component: () => import('../views/HomePage.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'LoginPage',
        
        component: () => import('src/views/LoginPage.vue'),
    },
    {
        path: '/shop',
        name: 'SHOP',
        
        component: () => import('../views/shop/index.vue'),
    },
    {
        path: '/vuex',
        name: 'VUEX',
        
        component: () => import('../views/vuex/index.vue'),
    },
    {
        path: '/message',
        name: 'MESSAGE',
        
        component: () => import('../views/message/index.vue'),
    },
    {
        path: '/form',
        name: 'FORM',
        
        component: () => import('../views/message/form.vue'),
    },
    {
        path: '/PlotDetailPage/:id',
        name: 'PlotDetailPage',
        
        component: () => import('../views/PlotDetailPage.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// const routerPush = router.push;
// router.push = function(to) {
//   console.log("路由拦截push");
//   return routerPush.call(this, to).catch(error => error);
// };

// router.back = function() {
//   console.log("路由拦截back");
//   return router.go(-1);
// };
function RouterStack(router: Router) {
    // const stack = [];
    router.afterEach((to, from) => {
        if (!store.state.user.loginUser) {
            store.commit('setUserInfo', useRandomName());
        }
        // console.log('store.state.user.loginUser', store.state.user.loginUser);
        // console.log('to, from', to, from);
        // console.log('provideStore.planList.value', provideStore.planList.value);
    });
    return router;
}

RouterStack(router);

export default router;
