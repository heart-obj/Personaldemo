<template>
	<el-container>
		<div>
			<router-view></router-view>
		</div>
		<el-footer class="footer_box">
			<el-menu class="el-menu-box" default-active="activeindex" @select="handleSelect">
				<el-menu-item index="1" class="menu-list">
					<router-link to="/home/homepage" tag="div">首页</router-link>
				</el-menu-item>
				<el-menu-item index="2" class="menu-list">
					<router-link to="/home/found" tag="div">发现</router-link>
				</el-menu-item>
				<el-menu-item index="3" class="menu-list">
					<router-link to="/home/indent" tag="div">订单</router-link>
				</el-menu-item>
				<el-menu-item index="4" class="menu-list">
					<router-link to="/home/personal" tag="div">我的</router-link>
				</el-menu-item>
			</el-menu>
		</el-footer>
	</el-container>
</template>

<script>
	export default{
		name:'componentindex',
		data(){
			return{
				name:'componentindex',
				activeindex:"1"
			}
		},
		methods: {
	      	handleSelect(key, keyPath) {
	        	console.log(key, keyPath);
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