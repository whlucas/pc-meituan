import axios from '@/axios.js'

// 整一个对象最后导出
let api = {
    // 里面每一个方法对应一个请求,params代表假如有参数的话就把这个参数传过来
    searchHotWords(params) {
        // 每一个方法最终返回的就是这个请求
        return axios.get('/api/meituan/header/searchHotWords.json',params);
    },
    getSearchList(params){
        return axios.get('/api/meituan/header/search.json',params);
    },
    getMenuList() {
        return axios.get('/api/meituan/index/nav.json');
    },
    getresultsByKeywords(){
        return axios.get('/api/meituan/index/resultsByKeywords.json');
    },
    getProductsList() {
        return axios.get('/api/meituan/list/goodsList.json');
    },
    getHotCity() {
        return axios.get('/api/meituan/city/hot.json');
    },
    getRecentCity() {
        return axios.get('/api/meituan/city/recents.json');
    },
    getProvinceList() {
        return axios.get('/api/meituan/city/province.json');
    },
    getCurrentPosition() {
        return axios.get('/api/meituan/city/getPosition.json');
    },
    getCityList() {
        return axios.get('/api/meituan/city/cityList.json');
    },
    login(params) {
        // 因为给后端传数据的时候,参数是在params属性下,如果我把params包在{}里面传数据,在页面里面就不用再写一遍params了,直接一个对象里面写参数就行了
        // return axios.get('/api/meituan/login', {params});
        // 但是如果我是这么写的,我在页面里面传params的时候就要一个对象里面包一个params属性.这个属性又是一个对象,对象里面写穿的参数
        return axios.get('/api/meituan/login', params);
    }
};

export default api;
