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
    }
};

export default api;
