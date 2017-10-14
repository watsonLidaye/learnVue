import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import product from '@/components/product'
import cexample from '@/components/example'
import severSupport from '@/components/severSupport'
import aboutUs from '@/components/aboutUs'
import cooperation from '@/components/cooperation'
import joinUs from '@/components/joinUs'


Vue.use(Router)

export default new Router({
	mode:"history",
   	routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/cexample',
      name: 'example',
      component: cexample
    },
    {
      path: '/severSupport',
      name: 'severSupport',
      component: severSupport
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: cooperation
    },
    {
      path: '/joinUs',
      name: 'joinUs',
      component: joinUs
    }
  ]
})
