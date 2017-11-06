import Vue from 'vue'
import Router from 'vue-router'
import ExcelPage from '@/pages/Excel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: ExcelPage
    }
  ]
})
