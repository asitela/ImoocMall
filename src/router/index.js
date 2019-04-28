/* eslint-disable camelcase */
import Vue from 'vue'
import Router from 'vue-router'
// import VueResource from 'vue-resource'
import GoodsList from '../text/GoodList.vue'
import GoodList from '@/views/GoodList.vue'

Vue.use(Router)
// Vue.use(VueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
      // 这里用来模拟动态路由的实现:用户必须在输入路径时加入一个goodsId，不然无法访问到GoodList
      path: '/goods/:goodsId/user/:name',
      name: 'GoodList',
      component: GoodsList
    },
    {
      path: '/good',
      name: 'GoodList',
      component: GoodList
    }
  ]
})
