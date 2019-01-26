import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入样式
import '@/assets/css/main.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

// 注册一个全局自定义指令
// 这里需要在document上面绑定一个click事件
Vue.directive('document-click', { // 第一个参数代表名称, 第二个参数是一个对象
    // 对象里面有几个函数
    // 每个函数有几个参数,第一个el表示我绑定的元素,我这个名绑定在哪个元素上面了,这个el就是哪个dom结点,第二个binding是一个对象,里面有一些我绑定的信息,第三个vnode是虚拟节点
    // bind函数,当绑定的时候会调用一次
    bind(el, binding, vnode) {
        // 这里第二个参数里面有一个值binding.value里面是我在绑定的时候传入的函数,这里取到这个函数,用来作为绑定的回调函数
        // 这里给document绑定一个click事件,事件触发的时候调用我select页面里面写的回调函数
        document.addEventListener('click', binding.value, false)
    },
    // inserted当被绑定的元素插入到DOM中会被调用
    inserted() {
        console.log('insert')
    },
    // update更新的时候触发
    uptade() {
        console.log('update')
    }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


// 一个eslint自动修改格式的插件
// npm i eslint-plugin-vuefix -D

// cli2.0里面这个做
// 在packge.json里面scripts.lint里面加一个--fix
// 在eslintrc.js里面改成这样plugins: [ 'vuefix' ]
// cmd里面来一个npm run lint


// 使用elementUI
// http://element-cn.eleme.io/#/zh-CN/component/installation
// cnpm i element-ui -S
