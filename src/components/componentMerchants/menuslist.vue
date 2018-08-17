<template>
	<div class="content-box">
		<div class="commend-box">
			<commend></commend>
		</div>
		<div>
			{{author}}
		</div>
	</div>
</template>

<script>
	import commend from './merchantrecommend';
	export default{
		name:"menuslist",
		data(){
			return {
				name:"商品列表"
			}
		},
//		props:['clickname'],
		components:{
			commend:commend
		},
		computed:{
			author(){
				return this.$store.state.author
			}
		}
	}
</script>

<style>
	.content-box{
		width: 100%;
	}
	.commend-box{
		width: 100%;
	}
	
</style>