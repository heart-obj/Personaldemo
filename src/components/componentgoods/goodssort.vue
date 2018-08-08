<template>
	<div class="goodssort_box swiper-container">
		<div class="swiper-wrapper">
	        <div class="swiper-slide">
	        	<el-row>
	        		<el-col :span="4" class="sort_list">
	        			<div></div>
	        			<span>111</span>
	        		</el-col>
	        		<el-col :span="4" class="sort_list"></el-col>
	        		<el-col :span="4" class="sort_list"></el-col>
	        		<el-col :span="4" class="sort_list"></el-col>
	        		<el-col :span="4" class="sort_list"></el-col>
	        		<el-col :span="4" class="sort_list"></el-col>
	        	</el-row>
	        </div>
	        <div class="swiper-slide">Slide 2</div>
	        <div class="swiper-slide">Slide 3</div>
	    </div>
		<div class="swiper-pagination"></div>
	</div>
	
</template>

<script>
	import Swiper from 'swiper';
	export default {
		name:"goodssort",
		data(){
			return {
				name:"goodssort"
			}
		},
		mounted(){
			new Swiper('.swiper-container',{
				direction:"horizontal",
				loop: true,
				pagination: {
			      el: '.swiper-pagination',
			    },
			})
		}
	}
	
</script>

<style scoped>
	.goodssort_box{
		width: 100%;
		height: 160px;
	}
	.swiper-wrapper{
		width: 100%;
		height: 100%;
	}
	.swiper-wrapper>div{
		width: 100%;
		height: 100%;
	}
	.sort_list{
		height: 80px;
		background: #ffffff;
	}
	.sort_list>div{
		width: 60px;
		height: 60px;
		background: red;
		margin: 0 auto;
	}
</style>