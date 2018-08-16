<template>
	<div>
		333
		<div>
			<commend></commend>
		</div>
		{{author}}
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
	
</style>