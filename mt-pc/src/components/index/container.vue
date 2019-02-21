<template>
    <div class="m-istyle">
        <!--给dl添加鼠标移入事件,通过事件冒泡找到dd-->
        <!--依据我外面数据里面起的class名给这个组件动态的添加上class名,方便写不一样的样式-->
        <dl @mouseover="over" :class="nav.class">
            <dt>{{nav.title}}</dt>
            <!--利用数据驱动来添加class类名,当kind等于all的时候添加上这个类名-->
            <!--data-type是和后端约定好的对接用的数据标识-->
            <dd v-for="(item, index) in nav.list" :key="index" :class="{active: kind === item.tab}"
                :data-type="item.tab">{{item.text}}
            </dd>

        </dl>
        <ul class="ibody">
            <!--里面渲染的东西随着kind的值的改变而改变,而kind的值是随着mouseover方法而改变的,所以能达到鼠标移到哪一个就换到哪一个的效果-->
            <li v-for="(item, index) in resultsData[kind]" :key="index">
                <el-card :body-style="{ padding: '0px' }" shadow="never">
                    <img :src="item.image"
                         class="image">
                    <div class="cbody">
                        <div class="title" :title="item.title">{{item.title}}</div>
                        <div class="sub-title" :title="item.subtitle">{{item.subtitle}}</div>

                        <!--如果我这个rentNum里面有值且current_price存在显示现在的价格-->
                        <div class="price-info" v-if="item.rentNum && item.price_info.current_price">
                            <span class="current-price-wrapper">
                                <span class="price-symbol numfont">¥</span>
                                <span class="current-price numfont">{{item.price_info.current_price}}</span>
                            </span>
                            <span class="old-price">{{item.price_info.old_price}}</span>
                            <span class="sold bottom-right-info">{{item.address}}</span>
                        </div>

                        <!--如果我rentNum里面的值是0或者没有,则显示抢光了-->
                        <div class="price-info" v-else-if="!item.rentNum">
                            <span class="current-price-wrapper">
                                <span class="price-symbol numfont">¥</span>
                                <span class="current-price numfont">抢光了</span>
                            </span>
                            <span class="sold bottom-right-info">{{item.address}}</span>
                        </div>

                        <!--如果我数据里面没有当前价格,也就是其他的情况,显示人均价格-->
                        <div class="price-info" v-else>
                            <span class="current-price-wrapper">
                                <span class="price-symbol numfont">¥</span>
                                <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                                <!--为了让后面的字体和前面的不一样,把后面的单独拿出来再写一个span,给这个span加一个span类名-->
                                <span class="units">/{{item.price_info.units}}均</span>
                            </span>
                            <span class="sold bottom-right-info">{{item.address}}</span>
                        </div>
                    </div>
                </el-card>
            </li>

        </ul>
    </div>
</template>

<script>
    import api from '@/api/index.js'
    export default {
        data() {
            return {
                kind: "all",
                resultsData: {},
                // list: [{
                //     image: "//p1.meituan.net/msmerchant/8071fc2511131749b6aa47c8b1487f08194991.jpg@368w_208h_1e_1c",
                //     title: "哈根达斯（北京西直门凯德店）",
                //     subtitle: "600克派对时刻蛋糕冰淇淋1个，约600克，圆",
                //     price_info: {
                //         current_price: null,
                //         old_price: null,
                //         // 如果数据里面有人均价格就显示人均的价格
                //         avg_price: 18,
                //         units: '人'
                //     },
                //     // 在数据里面设置一个标志,如果他卖完了就显示0
                //     rentNum: 10,
                //     address: '西直门/动物园'
                // },
                //     {
                //         image: "//p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@368w_208h_1e_1c",
                //         title: "祈年八号中餐厅",
                //         subtitle: "超值十人套餐一份",
                //         price_info: {
                //             current_price: 2388,
                //             old_price: 3688,
                //             avg_price: null,
                //             units: null
                //         },
                //         rentNum: 0,
                //         address: '崇文门新世界'
                //     }]
            }
        },
        // 子组件接收父组件传过来的值
        props: [
            'nav'
        ],
        created() {
            api.getresultsByKeywords().then(res => {
                // console.log(res);
                this.resultsData = res.data.data;
            })
        },
        methods: {
            over(e) {
                // 我通过拿到我这个事件源对象e.target,在我指的扎个dom里面去找这个dom的data-type属性,通过这个属性值来给修改kind的值
                // 因为我把这个over绑定在了dl上面,所以要先判断一下我指的是dl还是dd
                let dom = e.target;
                // 拿到我这个标签名,它默认是大写,要把他变成小写
                let tagName = dom.tagName.toLowerCase();
                // 一般都是写一个不往下执行的情况,这样让代码好看
                if (tagName !== 'dd') {
                    return false;
                }
                // 如果我指的是dd,就给我的这个数据kind设置上值
                this.kind = dom.getAttribute('data-type');

                // 动态获取数据 ajax请求
            }
        }
    }
</script>

<style lang="scss">
    @import "@/assets/css/index/artistic.scss";
</style>1
