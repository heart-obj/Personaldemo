<template>
	<el-container>
		<el-header class="header-box">
			<h3>{{name}}</h3>
		</el-header>
		<el-main>
			<el-row>
				<el-col :span="24">
					<div class="container-box">
						<img class="merchant-icon" src="https://fuss10.elemecdn.com/e/9e/0dcfc77c81c2df2bee953d0b78859jpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/"/>
						<div class="name-box">
							<div class="merchant-name"><span>黄记小厨房</span><i class="el-icon-arrow-right"></i></div>
							<div class="date">2018-08-20 11:05</div>
						</div>
						<span class="merchant-state">订单已到达</span>
					</div>
					<div class="container-box">
						<span>青椒拱嘴等四件商品</span>
						<span>￥25.00</span>
					</div>
					<div class="container-box">
						<div>再来一单</div>
						<div>评价</div>
					</div>
				</el-col>
			</el-row>
		</el-main>
	</el-container>
</template>

<script>
	export default{
		name:"indent",
		data(){
			return {
				name:"订单"
			}
		},
		created(){// el挂载前调用函数
			
		},
		methods:{// 事件定义
			
		}
	}
</script>

<style scoped="scoped">
	.header-box{
		background-image: -webkit-gradient(linear, left top, right top, from(#0af), to(#0085ff));
		color: #ffffff;
		height: 60px;
	}
	.to-index-box{
		float: left;
		height: 100%;
		
	}
	.to-index{
		font-size: 24px;
		font-weight: 600;
		line-height: 60px;
		
	}
	.header-box>h3{
		text-align: center;
		width: auto;
		display: inline-block;
	}
	.container-box{
		width: 100%;
	}
	.container-box>div{
		display: inline-block;
	}
	
	.merchant-icon{
		width: 40px;
		height: 40px;
		float: left;
	}
	.name-box{
		float: left;
		padding-left: 10px;
	}
	.merchant-name{
		line-height: 20px;
		font-size: 20px;
	}
	.merchant-name>span{
		display: inline-block;
		width: 100px;
		white-space: nowrap;
		overflow:hidden;
		text-overflow: ellipsis;
		height: 20px;
	}
	.date{
		font-size: 12px;
		color: #666666;
		text-align: left;
		margin-top: 10px;
	}
</style>