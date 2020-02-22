import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.axios = axios

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
    ak: 'dEGB3EyIHmgqcKHhXRsxVafGDzaKnShv'
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
