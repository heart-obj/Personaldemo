<template>
	<el-container>
		<homepage></homepage>
		<el-footer class="footer_box">
			<el-menu class="el-menu-box" default-active="1">
				<el-menu-item index="1" class="menu-list">首页</el-menu-item>
				<el-menu-item index="2" class="menu-list">发现</el-menu-item>
				<el-menu-item index="3" class="menu-list">订单</el-menu-item>
				<el-menu-item index="4" class="menu-list">我的</el-menu-item>
			</el-menu>
		</el-footer>
	</el-container>
</template>

<script>
	import homepage from './homepage';
	
	export default{
		name:'componentindex',
		data(){
			return{
				name:'componentindex',
			}
		},
		components:{
			homepage:homepage
		}
	} 
</script>

<style scoped>
	.footer_box{
		width: 100%;
		height: 60px;
		position: fixed;
		bottom: 0;
		left: 0;
		box-shadow:0 0 12px rgba(0,0,0,.5);
		
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