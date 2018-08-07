import Vue from 'vue'
import Router from 'vue-router'
import componentindex from '@/components/componentIndex/componentindex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'componentindex',
      component: componentindex
    }
  ]
})
