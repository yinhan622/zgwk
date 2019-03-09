import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import index from "./views/index.vue"
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home ,
    children:[
     {path: '/', component: index},
      {path:'/index',component:index}
  ]
  } ,
  
  ]
})
