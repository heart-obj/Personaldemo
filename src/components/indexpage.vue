<template>
	<div>
		<componentindex></componentindex>
		
	</div>
</template>

<script>
	import componentindex from "./componentindex";
	export default{
		name:"index",
		data(){
			return {
				name:"首页"
			}
		},
		components:{
			componentindex:componentindex
		}
	}
</script>

<style scoped>
	
</style>