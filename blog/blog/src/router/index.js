import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'
import gallery from '@/components/pages/gallery'
import article from '@/components/pages/oriArticle'

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
    },
    {
      path: '/article',
      name: 'article',
      component: article
    }
  ]
})
