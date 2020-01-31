import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import scenic from '@/components/scenic'

import testLYJ from '@/components/text/testLYJ'
import testWH from '@/components/text/testWH'
import testZN from '@/components/text/testZN'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/scenic',
      component: scenic
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