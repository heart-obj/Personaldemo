import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/componenHomepage/homepage';
import found from "@/components/componentFound/found";
import indent from "@/components/componentIndent/indent";
import personal from "@/components/componentPersonal/personal";

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		redirect:'/homepage'
  	},
    {
    	path: '/homepage',
    	name: 'homepage',
    	component: homepage
    },
    {
    	path: '/found',
    	name: 'found',
    	component: found
    },
    {
    	path: '/indent',
    	name: 'indent',
    	component: indent
    },
    {
    	path: '/personal',
    	name: 'personal',
    	component: personal
    }
  ]
})
