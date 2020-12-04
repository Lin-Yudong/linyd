import Vue from 'vue'
import Router from 'vue-router'
import xintiaoRouter from './xintiao'
import baiduRouter from './baidu'
import helloworld from './helloworld'
import movieRoutre from './dianying/movie'
import mineRouter from './dianying/mine'
import cinemaRouter from './dianying/cinema'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    xintiaoRouter,
    baiduRouter,
    helloworld,
    movieRoutre,
    mineRouter,
    cinemaRouter,
  ]
})
