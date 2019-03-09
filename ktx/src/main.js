import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//1:引入mint-ui 样式文件
import'mint-ui/lib/style.css'
//3:引入mint-ui 组件 Header
import {Swipe,SwipeItem,} from "mint-ui"
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
