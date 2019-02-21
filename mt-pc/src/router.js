import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'
import Index from '@/page/index'
import ChangeCity from '@/page/changeCity'
import goodsList from '@/page/goodsList'
import Login from '@/page/login'
import Register from '@/page/register'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'defaultPage',
            component: defaultPage,

            // 重定向一下,让他默认就显示这个index页面
            redirect: '/index',

            // 因为我的页面是放在模板页面里面的
            // 所以配置路由要放到模板页面的下面
            children: [{
                    path: '/index',
                    name: 'index',
                    component: Index
                },
                {
                    path: 's/:name',
                    name: 'goods',
                    component: goodsList
                },{
                    path: '/changeCity',
                    name: 'changeCity',
                    component: ChangeCity
                }]
        },
        {
            path: '/blank',
            name: 'blankPage',
            component: blankPage,
            children: [{
                path: '/login',
                name: 'login',
                component: Login
            },{
                path: '/register',
                name: 'register',
                component: Register
            }]
        }

    ]
})
