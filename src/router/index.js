import Vue from 'vue'
import Router from 'vue-router'
import Signup from '@/components/Signup'
import PetShop from '@/components/PetShop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'petshop',
      component: PetShop
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ]
})
