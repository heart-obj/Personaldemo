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
						<li class="goodslist" v-for="(val,key) in category[activeB].dataArr" v-bind:key="key">
							<img src="//fuss10.elemecdn.com/9/03/5229bdd71cfe5165fe6cef7b3a83djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/" alt="" width="100px" height="100px"/>
							<div class="goods-detail">
								<div style="font-size: 16px;font-weight: 600;">{{val.goodsname}}</div>
								<div>语录：你的胃口由我负责</div>
								<div>
									<span>月售{{val.sales}}份</span>
									<span>好评率{{val.rete}}%</span>
								</div>
								<div>
									<span>9折</span>
									<span>每单限1份优惠</span>
								</div>
								<div style="width: 100%;">
									<span style="display: inline-block;float: left;">￥{{val.price}}</span>
									<div style="float: right;margin-right: 20px;">
										<i v-show="val.num>0" class="el-icon-remove" style="color: rgb(0, 133, 255);margin-left: 2px;font-size: 20px;float: left;" @click="handleReduce(key)"></i>
										<span v-show="val.num>0" style="display: inline-block;float: left;margin: 0 10px;padding-top: 2px;">{{val.num}}</span>
										<i class="el-icon-circle-plus" style="color: rgb(0, 133, 255);margin-left: 2px;font-size: 20px;float: left;" @click="handleAdd(key)"></i>
									</div>
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
					cartname:"乡村基（枫丹店）",
					dataArr:[{
						goodsname:"小炒肉",
						sales:"100",
						rete:"95",
						price:"20",
						num:0
					},{
						goodsname:"小炒肉",
						sales:"100",
						rete:"95",
						price:"20",
						num:0
					},{
						goodsname:"小炒肉",
						sales:"100",
						rete:"95",
						price:"20",
						num:0
					},{
						goodsname:"小炒肉",
						sales:"100",
						rete:"95",
						price:"20",
						num:0
					},{
						goodsname:"小炒肉",
						sales:"100",
						rete:"95",
						price:"20",
						num:0
					}]
				},{
					categoryname:"米饭",
					cartname:"乡村基（枫丹店）",
					dataArr:[{
						goodsname:"大米饭",
						sales:"100",
						rete:"100",
						price:"2",
						num:0
					}]
				},{
					categoryname:"素菜",
					cartname:"乡村基（枫丹店）",
					dataArr:[{
						goodsname:"小白菜",
						sales:"100",
						rete:"95",
						price:"20",
						num:0
					}]
				},{
					categoryname:"荤菜",
					cartname:"乡村基（枫丹店）",
					dataArr:[{
						goodsname:"小炒肉",
						sales:"100",
						rete:"95",
						price:"20",
						num:0
					}]
				},{
					categoryname:"饮料",
					dataArr:[{
						goodsname:"脉动",
						sales:"100",
						rete:"95",
						price:"5",
						num:0
					}]
				},{
					categoryname:"小吃",
					cartname:"乡村基（枫丹店）",
					dataArr:[{
						goodsname:"花生米",
						sales:"100",
						rete:"95",
						price:"6",
						num:0
					}]
				},{
					categoryname:"优惠",
					cartname:"乡村基（枫丹店）",
					dataArr:[{
						goodsname:"花生米",
						sales:"100",
						rete:"95",
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
			},
			handleReduce(index){
				let $this=this;
				let cartData=$this.category[$this.activeB].dataArr[index];
				let updateDate={
					cartname:"乡村基（枫丹店）",
					datalist:[cartData]
				}
				if(cartData.num===0) return;
				cartData.num--;
				
				this.$store.commit("cartlist",updateDate);
				
			},
			handleAdd(index){
				let $this=this;
				let cartData=$this.category[$this.activeB].dataArr[index];
				let updateDate={
					cartname:"乡村基（枫丹店）",
					datalist:[cartData]
				}
				console.log(cartData)
				this.$store.commit("cartlist",updateDate);
				cartData.num++;
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
	.container-right{
		max-height: 500px;
		overflow: auto;
	}
	.container-right>li{
		padding: 10px 0 0 0;
		font-size: 12px;
		display: inline-block;
		width: 100%;
		height: 100px;
		position: relative;
		
	}
	.goodslist>img{
		float: left;
		position: absolute;
		left: 0;
		top: 10;
	}
	.goods-detail{
		width: 100%;
		height: 100%;
		text-align: left;
		box-sizing: border-box;
		padding-left: 106px;
	}
	.goods-detail>div{
		width: 100%;
		height: 20%;
	}
</style>