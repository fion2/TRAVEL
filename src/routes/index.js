import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login2',
            name: 'login',
            component: () => import('@/views/LoginPage.vue'),
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import('@/views/SignupPage.vue'),
        },
    ]
})