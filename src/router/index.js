import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/indexpage';
import homepage from '@/components/componenHomepage/homepage';
import found from "@/components/componentFound/found";
import indent from "@/components/componentIndent/indent";
import personal from "@/components/componentPersonal/personal";
import merchant from "@/components/componentMerchants/merchant";

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		redirect:'/home/homepage'
  	},
    {
    	path: '/home',
    	name: 'home',
    	component: home,
    	children:[
	    	{
	    		path: '/',
    			name: 'home',
    			component: homepage,
	    	},
	    	{
	    		path: '/',
    			name: 'home',
    			component: found,
	    	},
	    	{
	    		path: '/',
    			name: 'home',
    			component: indent,
	    	},
	    	{
	    		path: '/',
    			name: 'home',
    			component: personal,
	    	}
    	]
    },
    
    {
		    	path:'/merchant',
		    	name:'merchant',
		    	component:merchant
		    }
    
  ]
})
