import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import toolbar from '@/components/toolbar'
import talk from '@/components/talk'
Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/tool',
      name: 'toolbar',
      component: toolbar
    },
    {
      path: '/',
      name: 'talk',
      component: talk
    }
  ]
})
