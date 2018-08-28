<template>
	<el-container>
		<el-header class="header-box">
			<h3>{{name}}</h3>
		</el-header>
		<el-main style="padding-bottom: 60px;">
			<el-row>
				<el-col class="model-list" :span="24" v-for="(val,key) in datalist" v-bind:key="key">
					<div class="container-box">
						<img class="merchant-icon" src="https://fuss10.elemecdn.com/e/9e/0dcfc77c81c2df2bee953d0b78859jpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/"/>
						<div class="name-box">
							<div class="merchant-name"><span>{{val.msg.cartname}}</span><i class="el-icon-arrow-right"></i></div>
							<div class="date">2018-08-20 11:05</div>
						</div>
						<span class="merchant-state" style="float: right;">订单已到达</span>
					</div>
					<div class="container-box" style="line-height: 50px;padding-left:50px;box-sizing: border-box;">
						<span style="float: left;">{{val.msg.datalist[0].goodsname}}等{{val.msg.datalist.length}}件商品</span>
						<span style="float: right;">￥25.00</span>
					</div>
					<div class="container-box">
						<div style="float:right;">
							<div style="padding:10px 20px;border:1px solid #2395ff;color: #2395ff;font-size: 14px;border-radius:4px;float: left;margin-right: 10px;">再来一单</div>
						<div style="padding:10px 20px;border:1px solid #ff5339;color: #ff5339;font-size: 14px;border-radius:4px;float: right;">评价得金币</div>
						</div>
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
				name:"订单",
				datalist:"",
			}
		},
		created(){// el挂载前调用函数
			console.log(this.$store.state.order)
			this.datalist=this.$store.state.order;
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
		position: sticky;
		left: 0;
		top: 0;
		z-index: 111;
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
		height: 50px;
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
		max-width: 140px;
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