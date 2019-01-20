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
