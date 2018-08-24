<template>
	<div>
		{{modelid}}
	</div>
</template>

<script>
	export default{
		name:"found",
		data(){
			return {
				name:"发现"
			}
		},
		props:{
			modelid:[String]
		}
	}
</script>

<style scoped>
</style>