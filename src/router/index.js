import Vue from 'vue'
import Router from 'vue-router'
import Dianying from '@/components/Dianying/Movie'
import Xintiao from '@/components/views'
import Baidu from '@/components/xuexi'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dianying',
      component: Dianying
    },
    {
      path:'/xintiao',
      name:'Xintiao',
      component:Xintiao
    },
    {
      path:'/baidu',
      name:'Baidu',
      component:Baidu
    }
  ]
})
