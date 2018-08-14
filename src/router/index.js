import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/indexpage';

import merchant from "@/components/componentMerchants/merchant";

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
		    }
    
  ]
})
