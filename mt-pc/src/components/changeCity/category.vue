<template>
    <div class="category">
        <dl class="m-category">
            <dt>按拼音首字母选择: </dt>
            <dd v-for="(item, index) in list" :key="index">
                <a :href="'#city-'+ item">{{item}}</a>
            </dd>
        </dl>
        <!--我需要给dl加一个id值,为了能够实现点击锚点的跳转-->
        <dl class="m-category-section" v-for="(item,index) in cityGroup" :key="index" :id="'city-' + index">
            <!--这里因为遍历的是对象,index代表key也就是首字母-->
            <dt>{{index}}</dt>
            <!--然后我再循环我item里面的每一项-->
            <dd>
                <span v-for="(city, i) in item" :key="city.id">{{city.name}}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
                cityList: [],
                cityGroup: {}
            }
        },
        // 生命周期函数created
        // 我这里要把我拿到的数据按照首字母进行分组,所以写在生命周期函数里面
        created() {
            let data = [{
                "ID": 1,
                "name": "北京",
                "pinyin": "beijing",
                "acronym": "bj",
                "rank": "S",
                "firstChar": "b"
            },{
                "ID": 10,
                "name": "上海",
                "pinyin": "shanghai",
                "acronym": "sh",
                "rank": "S",
                "firstChar": "s"
            },{
                "ID": 20,
                "name": "广州",
                "pinyin": "guangzhou",
                "acronym": "gz",
                "rank": "S",
                "firstChar": "G"
            },{
                "ID": 30,
                "name": "深圳",
                "pinyin": "shenzheng",
                "acronym": "sh",
                "rank": "S",
                "firstChar": "s"
            },{
                "ID": 59,
                "name": "成都",
                "pinyin": "chengdu",
                "acronym": "cd",
                "rank": "S",
                "firstChar": "c"
            }];
            // obj就是最后放我分好类的数据
            let obj = {};
            // 遍历数组如果obj里面没有data某一项的firstChar,在obj的这一项创建一个数组进行压数据
            data.forEach((item, index) => {
                // 转换成大写
                if(!obj[item.firstChar.toUpperCase()]){
                    obj[item.firstChar.toUpperCase()] = []
                }
                obj[item.firstChar.toUpperCase()].push(item);
            });
            // 把我这个obj存一下
            this.cityGroup = obj;
        },
        // methods() {}
    }
</script>

<style lang="scss">
    @import "@/assets/css/changecity/category.scss";
</style>
