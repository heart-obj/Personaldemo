<template>
	<div class="commend-box">
		{{author}}商家推荐
	</div>
</template>

<script>
	export default{
		name:"comend",
		data(){
			return {
				name:"商家推荐"
			}
		},
		computed:{
			author(){
				return this.$store.state.author
			}
		}
	}
</script>

<style>
	.commend-box{
		height: 100px;
	}
</style>