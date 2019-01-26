import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        position: '北京'
    },
    // 严格模式要求修改我state里面的属性必须要在mutations里面定义函数修改
    mutations: {
        setPosition(state, value) { // 第一个参数为了拿到我state里面的值,第二个参数就是我改变的时候传过来需要改变的值
            state.position = value
        }
    },
    // 因为获取地理位置信息是一个异步的过程,我们可以通过actions来获取
    actions: {
        setPosition({commit}, value){
            // 这里本来第一个参数是ctx,调用的时候是ctx.commit,当我这里只用到commit的时候我就可以
            // 因为我用h5里面的获取地理位置信息的接口只能获取到经纬度信息,我需要向后端来发送请求,来拿到位置数据
            commit('setPosition', value);
        }
    }
})
