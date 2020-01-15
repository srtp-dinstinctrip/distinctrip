import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import scenic from '@/components/scenic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/scenic',
      name: 'scenic',
      component: scenic
    }
  ]
})