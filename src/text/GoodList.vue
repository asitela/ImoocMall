<template>
  <div id="goodlist">
    这是商品列表页面
    <span>goodsId:{{$route.params.goodsId}}</span><br/>
    <span>username:{{$route.params.name}}</span>
    <div>
      <router-view></router-view>
    </div>
    <router-link to="/cart">router-link:转到购物车页面</router-link>
    <button @click="jump()">buttom：跳转到购物车页面</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello vue'
    }
  },
  methods: {
    jump () {
      // this.$router.push('/cart')
      // 像购物车页面传值的方式
      this.$router.push({path: '/cart?goodsId=123'})
    }
  }
}
</script>
<style>
</style>
