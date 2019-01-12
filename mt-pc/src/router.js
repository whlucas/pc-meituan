import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'defaultPage',
            component: defaultPage
        },
        {
            path: '/blank',
            name: 'blankPage',
            component: blankPage
        }

    ]
})
