<template>
	<div class="content-box">
		<div class="commend-box">
			<commend></commend>
		</div>
		<div style="background: #ffffff;">
			<div class="container-left">
				<ul>
					<li v-for="(val,key) in 10" :class="active-li">
						<el-row>
							<el-col :span="4">
									<img src="//fuss10.elemecdn.com/7/59/9165195495ce2960ade8a326e8e81png.png?imageMogr/format/webp/thumbnail/26x/" alt="" width="16px" height="16px" style="float: left;" />							
							</el-col>
							<el-col :span="20" style="text-align: left;padding-left: 8px;word-wrap: break-word;">
								热销
							</el-col>
						</el-row>
					</li>
				</ul>	
			</div>
			<div class="container-right">
			
			</div>
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
			},
			selectLi(){
				
			}
		}
	}
</script>

<style>
	li{
		list-style: none;
	}
	.content-box{
		width: 100%;
	}
	.commend-box{
		width: 100%;
	}
	.container-left{
		width: 100px;
		background: #F5F5F5;
		box-sizing: border-box;
	}
	.container-left>ul{
		padding:0 0 0 10px;
		
	}
	.container-left>ul>li{
		padding: 10px 0;
		font-size: 14px;
		color: #666;
	}
	.container-left>ul li img{
		float: left;
		width: 16px;
		height: 16px;
	}
	.container-left>ul li span{
		display: inline-block;
	}
	.active-li{
		background: #ffffff;
	}
</style>