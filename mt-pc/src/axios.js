import axios from 'axios';

// 我这里配置一个全局的属性这个baseURL就代表基础的域名
axios.defaults.baseURL = 'http://api.duyiedu.com';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 这个config就是我请求回来的东西,我打印出来看一下
    // console.log(config);

    // 如果我要对我这个axios进行一些配置
    config.params = {
        // 如果我在请求的时候还想加入参数,这样会把我请求的时候加入的参数覆盖,这样用解构的方式,新的params的组成是之前的params解构了,然后加入一条
        ...config.params,
        appkey: '1213372700_1548489954031'
    };

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 我对这个axios配置了之后我需要导出
export default axios;
