import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import gallery from '@/components/gallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: gallery
    }
  ]
})
