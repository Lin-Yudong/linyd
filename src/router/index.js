import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/views/First'
import Baidu from '@/components/views/Baidu'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/first',
      name:'First',
      component:First
    },
    {
      path:'/baidu',
      name:'Baidu',
      component:Baidu
    }
  ]
})
