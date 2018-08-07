<template>
	<el-container>
		<el-header class="box_h">
			<div class="index_h_t">饿了么</div>
			<el-row class="index_h_d">
				<el-col :span="8" class="index_h_dw">
					<i class="el-icon-location-outline"></i>
					<span>名著司南</span>
					<i class="el-icon-caret-bottom"></i>
				</el-col>
				<el-col :span="8" :offset="8">
					<el-row>
						<el-col :span="24" class="header_tq">
							<span>35.21℃</span>
							<span>多云天</span>
						</el-col>
					</el-row>
				</el-col>
			</el-row>
		</el-header>
		<div class="check_box">
			<el-button class="check_btn" type="primary" icon="el-icon-search">搜索饿了么商家、商品名称</el-button>
		</div>
		<el-main class="content_box">
			<componentgoods></componentgoods>
		</el-main>
		<el-footer class="footer_box">
			
		</el-footer>
	</el-container>
</template>

<script>
	import componentgoods from '../componentgoods/indexgoods'
	export default{
		name:'componentindex',
		data(){
			return{
				name:'componentindex'
			}
		},
		components:{
			componentgoods:componentgoods
		}
	} 
</script>

<style scoped>
	
	.box_h{
	    background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#0af), to(#0085ff));
	    background-image: -webkit-linear-gradient(left, #0af, #0085ff);
	    background-image: -moz-linear-gradient(left, #0af, #0085ff);
	    background-image: -o-linear-gradient(left, #0af, #0085ff);
	    background-image: linear-gradient(left, #0af, #0085ff);
		height: auto !important;
		color: #ffffff;
		width: 100%;
	}
	.index_h_t{
		height: 50px;
		line-height: 50px;
		text-align: left;
		color: #ffffff;
	}
	.index_h_d{
		height: 50px;
		
	}
	.index_h_d div{
		height: 100%;
	}
	.index_h_dw{
		line-height: 50px;
		text-align: left;
	}
	.header_tq div{
		width: auto;
		float: left;
	}
	.header_tq span{
		display: inline-block;
		line-height: 30px;
		height: 50%;
		width: 100%;
		text-align: right;
	}
	.check_box{
		width: 100%;
		height: 60px;
		box-sizing: border-box;
		background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#0af), to(#0085ff));
	    background-image: -webkit-linear-gradient(left, #0af, #0085ff);
	    background-image: -moz-linear-gradient(left, #0af, #0085ff);
	    background-image: -o-linear-gradient(left, #0af, #0085ff);
	    background-image: linear-gradient(left, #0af, #0085ff);
	    position: sticky;
	    top: 0;
	    padding: 10px 15px;
	}
	.check_btn{
		width: 100%;
		height: 100%;
		background: #ffffff;
		text-align: center;
		color: #9e9e9e;
		font-size: 14px;
	}
	
	.content_box{
		width: 100%;
	}
	
	.footer_box{
		width: 100%;
		height: 60px;
		background: red;
		position: fixed;
		bottom: 0;
		left: 0;
		
	}
</style>