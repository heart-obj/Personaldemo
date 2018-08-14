<template>
	<el-container>
		<div :is="ismodel"></div>
		<el-footer class="footer_box">
			<el-menu class="el-menu-box" default-active="activeindex" @select="handleSelect">
				<el-menu-item index="homepage" class="menu-list">
					首页
				</el-menu-item>
				<el-menu-item index="found" class="menu-list">
					发现
				</el-menu-item>
				<el-menu-item index="indent" class="menu-list">
					订单
				</el-menu-item>
				<el-menu-item index="personal" class="menu-list">
					我的
				</el-menu-item>
			</el-menu>
		</el-footer>
	</el-container>
</template>

<script>
	import homepage from './componenHomepage/homepage';
	import found from "./componentFound/found";
	import indent from "./componentIndent/indent";
	import personal from "./componentPersonal/personal";
	export default{
		name:'componentindex',
		data(){
			return{
				name:'componentindex',
				activeindex:"1",
				homepage:"homepage",
				found:"found",
				indent:"indent",
				personal:"personal",
				ismodel:"homepage"
				
			}
		},
		components:{
			homepage:homepage,
			found:found,
			indent:indent,
			personal:personal
		},
		methods: {
	      	handleSelect(key, keyPath) {
	        	this.ismodel=key;
	      	}
	    }
	} 
</script>

<style scoped>
	.footer_box{
		width: 100%;
		height: 60px;
		position: fixed;
		background: #ffffff;
		bottom: 0;
		left: 0;
		box-sizing: border-box;
		box-shadow:0 0 12px rgba(0,0,0,.5);
		z-index: 9999;
	}
	.el-menu-box{
		border: none;
	}
	.menu-list{
		width: 25%;
		height: 100%;
		float: left;
	}
</style>