<template>
	<div class="merchant-box">
		<el-container>
			<el-header>111</el-header>
			<el-container>
				<el-aside>左侧</el-aside>
				<el-main>右侧</el-main>
			</el-container>
			
			
		</el-container>
	</div>
	
</template>

<script>
	export default {
		name:"merchant",
		data(){
			return {
				name:"商家"
			}
		}
	}
</script>

<style scoped>
.merchant-box{
	height: 500px;
}
	
</style>