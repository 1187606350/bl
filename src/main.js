import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button,Icon} from  'element-ui'
import less from 'less'
import './assets/css/reset.css'
Vue.config.productionTip = false
Vue.use(Button).use(Icon)
Vue.use(less)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
