import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/indexpage';

import merchant from "@/components/componentMerchants/merchant";
import selectgoods from '@/components/componentMerchants/selectgoods';
import shoppingcart from '@/components/shoppingcart/shoppingcart';


Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		redirect:'/home'
  	},
    {
    	path: '/home',
    	name: 'home',
    	component: home,
    },
    {
    	path:'/merchant',
    	name:'merchant',
    	component:merchant
    },
    {
    	path:'/shoppingcart',
    	name:'shoppingcart',
    	component:shoppingcart
    },
    {
    	path:'/selectgoods',
    	name:'selectgoods',
    	component:selectgoods
    }
    
  ]
})
