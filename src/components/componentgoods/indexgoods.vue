<template>
	<div class="goos_box">
		<goodssort></goodssort>
	</div>
	
</template>

<script>
	import goodssort from './goodssort';
	export default{
		name:"goods",
		data(){
			return {
				name:"goods"
			}
		},
		components:{
			goodssort:goodssort
		}
	}
	
</script>

<style scoped>
	.goos_box{
		width: 100%;
		background: #0085FF;
	}
</style>