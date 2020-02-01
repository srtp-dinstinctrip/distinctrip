import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import sign from '@/components/sign'
import scenic from '@/components/scenic'
import book from '@/components/book'
import dis from '@/components/dis'
import home from '@/components/home'

import error from '@/components/error'

import testLYJ from '@/components/test/testLYJ'
import testWH from '@/components/test/testWH'
import testZN from '@/components/test/testZN'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/sign',
      component: sign
    },
    {
      path: '/scenic',
      component: scenic
    },
    {
      path: '/book',
      component: book
    },
    {
      path: '/dis',
      component: dis
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/test/zn',
      component: testZN
    },
    {
      path: '/test/wh',
      component: testWH
    },
    {
      path: '/test/lyj',
      component: testLYJ
    },
    {
      path: '*',
      component: error
    }
  ]
})