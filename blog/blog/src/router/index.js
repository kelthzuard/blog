import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'
import gallery from '@/components/pages/gallery'
import oriArticle from '@/components/pages/oriArticle'
import articlePage from '@/components/pages/articlePage'
import editPage from '@/components/pages/editPage'
import editGallery from '@/components/pages/editGallery'

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
      path: '/oriArticle',
      name: 'oriArticle',
      component: oriArticle
    },
    {
      path: '/articlePage',
      name: 'articlePage',
      component: articlePage
    },
    {
      path: '/editPage',
      name: 'editPage',
      component: editPage
    },
    {
      path: '/editGallery',
      name: 'editGallery',
      component: editGallery
    }
  ]
})
