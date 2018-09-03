<template>
	<div class="content-box">
		<div class="commend-box">
			<commend></commend>
		</div>
		<div style="background: #ffffff;margin-top: 10px;">
			<el-row>
				<el-col :span="6">
					<div class="container-left">
						<ul>
							<li v-for="(val,key) in category" :class="activeB==key?active:false" v-bind:key="key" @click="selectLi(key)">
								<el-row>
									<el-col :span="4">
											<img src="//fuss10.elemecdn.com/7/59/9165195495ce2960ade8a326e8e81png.png?imageMogr/format/webp/thumbnail/26x/" alt="" width="16px" height="16px" style="float: left;" />							
									</el-col>
									<el-col :span="20" style="text-align: left;padding-left: 8px;word-wrap: break-word;">
										{{val.categoryname}}
									</el-col>
								</el-row>
							</li>
						</ul>	
					</div>
				</el-col>
				<el-col :span="18">
					<ul class="container-right">
						<li class="goodslist">
							<img src="//fuss10.elemecdn.com/9/03/5229bdd71cfe5165fe6cef7b3a83djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/" alt="" width="100px" height="100px"/>
							<div class="goods-detail">
								<div>番茄炒蛋</div>
								<div>语录：你的胃口由我负责</div>
								<div>
									<span>月售100份</span>
									<span>好评率95%</span>
								</div>
								<div>
									<span>￥36</span>
									<i class="el-icon-circle-plus"></i>
								</div>
							</div>
						</li>
					</ul>
				</el-col>
			</el-row>
			
			
		</div>
	</div>
</template>

<script>
	import commend from './merchantrecommend';
	export default{
		name:"menuslist",
		data(){
			return {
				name:"商品列表",
				active:"active-li",
				activeB:0,
				category:[{
					categoryname:"热销",
					dataArr:[{
						name:"小炒肉",
						sale:"100",
						evalute:"95",
						price:"20",
						num:0
					},{
						name:"小炒肉",
						sale:"100",
						evalute:"95",
						price:"20",
						num:0
					},{
						name:"小炒肉",
						sale:"100",
						evalute:"95",
						price:"20",
						num:0
					},{
						name:"小炒肉",
						sale:"100",
						evalute:"95",
						price:"20",
						num:0
					},{
						name:"小炒肉",
						sale:"100",
						evalute:"95",
						price:"20",
						num:0
					}]
				},{
					categoryname:"米饭",
					dataArr:[{
						name:"大米饭",
						sale:"100",
						evalute:"100",
						price:"2",
						num:0
					}]
				},{
					categoryname:"素菜",
					dataArr:[{
						name:"小白菜",
						sale:"100",
						evalute:"95",
						price:"20",
						num:0
					}]
				},{
					categoryname:"荤菜",
					dataArr:[{
						name:"小炒肉",
						sale:"100",
						evalute:"95",
						price:"20",
						num:0
					}]
				},{
					categoryname:"饮料",
					dataArr:[{
						name:"脉动",
						sale:"100",
						evalute:"95",
						price:"5",
						num:0
					}]
				},{
					categoryname:"小吃",
					dataArr:[{
						name:"花生米",
						sale:"100",
						evalute:"95",
						price:"6",
						num:0
					}]
				},{
					categoryname:"优惠",
					dataArr:[{
						name:"花生米",
						sale:"100",
						evalute:"95",
						price:"6",
						discounts:"3",
						num:0
					}]
				}]
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
		},
		methods:{
			selectLi(key){
				this.activeB=key;
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
		float:left;
	}
	ul{
		padding: 0;
		margin: 0;
		
	}
	.container-left>ul>li{
		padding: 10px;
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
	.container-right>li{
		padding: 10px 0;
	}
	.goodslist>img{
		float: left;
	}
	.goods-detail{
		float: left;
	}
</style>