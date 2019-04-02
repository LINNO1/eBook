import Vue from 'vue'
import Router from 'vue-router'
import Ebook from '../ebook'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
    /*  name: 'HelloWorld',
      component: HelloWorld,*/
      redirect: '/ebook'
    },
    {
      path: '/ebook',
      name: 'Ebook',
      component: Ebook
    }
  ]
})
