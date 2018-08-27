<template>
	<div id="app">
		<router-view></router-view>
		<div class="shoppingCart-btn" @click="shoppingCart"></div>
	</div>
</template>

<script>
	import indexcontent from './components/indexpage';
	export default {
		name: '',
		components: {
			indexcontent: indexcontent
		},
		methods:{
			shoppingCart(){
				this.$router.push({path:'/shoppingcart'})
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	
	.el-message-box {
		width: 280px !important;
	}
	
	.shoppingCart-btn {
		width: 40px;
		height: 40px;
		background: rgba(255, 255, 255, .6) url(img/cart_off_icon.png)center no-repeat;
		background-size: 50% 50%;
		border: 2px solid #666666;
		border-radius: 50%;
		position: fixed;
		bottom: 100px;
		right: 20px;
		z-index: 999;
	}
</style>