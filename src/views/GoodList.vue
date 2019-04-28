<template>
  <div>
    <navsheader></navsheader>
    <navsbread>
      <span slot="bread">Goods</span>
      <!--<span slot="b">/测试一下</span>-->
    </navsbread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">Price
            <svg class="icon icon-arrow-short">
              <use xlink:href="#icon-arrow-short"></use>
            </svg>
          </a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" :class="{'filterby-show': filterBy}">
            <dl class="filter-price" style="text-align: left;">
              <dt>Price:</dt>
              <dd><a href="javascript:void(0)" :class="{'cur': priceChecked == 'all'}"
                     @click="priceChecked=='all'">All</a></dd>
              <!--下面只能根据索引来判断。通过点击@click事件之后，来试试当前的索引。 @click="priceChecked=index"-->
              <dd v-for="(price,index) in priceFilter" :key="price.id" @click="setPriceFilter(index)">
                <a href="javascript:void(0)"
                   :class="{'cur': priceChecked==index}">{{price.startPrice}} - {{price.endPrice}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="item in goodList" :key="item.id">
                  <div class="pic">
                    <!--可以这样写：v-lazy="'/static/'+item.productImg"-->
                    <a href="#"><img v-lazy="item.productImg" alt="暂无图片"></a>
                  </div>
                  <div class="main">
                    <div class="productName">{{item.productName}}</div>
                    <div class="productPrice">{{item.productPrice}}元</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--遮罩-->
    <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
    <navsfooter></navsfooter>
  </div>
</template>
<script>
/* eslint-disable indent */
  import './../assets/css/base.css'
  import './../assets/css/product.css'
  import navsheader from '../components/Navheader.vue'
  import navsfooter from '../components/Navfooter.vue'
  import navsbread from '@/components/Navbread.vue'
  import axios from 'axios'

  export default {
    // 如果直接这样写NavHeader 就相当于默认成NavHeader：NavHeader
    components: {
      navsheader,
      navsfooter,
      navsbread,
      axios
    },
    name: 'goodlist',
    data () { // 每个组件里的data()都只能是个函数，而不能是一个Object
      return {
        goodList: [],
        priceFilter: [
          {
            startPrice: '0.00',
            endPrice: '500.00'
          },
          {
            startPrice: '500.00',
            endPrice: '1000.00'
          },
          {
            startPrice: '1000.00',
            endPrice: '2000.00'
          }
        ],
        priceChecked: 'all', // 设置当前选中的是哪一项
        filterBy: false, // 用来控制样式是否弹出
        overLayFlag: false // 控制遮罩是否弹出
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.getGoodList()
      })
    },
    methods: {
      getGoodList () {
        axios.get('/good/List').then((results) => {
          var res = results.data
          this.goodList = res.result
          console.log(this.goodList)
        })
      },
      showFilterPop () {
        this.filterBy = true // 价格
        this.overLayFlag = true // 遮罩弹出
      },
      setPriceFilter (index) {
        this.priceChecked = index // 第一步将index传进来赋给当前选中的priceChecked
        this.closePop() // 第二步将弹出框关闭
      },
      closePop () {
        /**
         * 如果不把方法放到setPriceFilter里引用，
         * 在这里这样做只能在点击遮罩时，让弹出的框关掉
         *   this.filterBy = false
         this.overLayFlag = false
         * @type {boolean}
         */
        this.filterBy = false // 价格关闭
        this.overLayFlag = false // 遮罩关闭
      }
    }
  }
</script>
<style>
</style>
