<template>
	<div class="content-box">
		<div class="commend-box">
			<commend></commend>
		</div>
		<div style="background: #ffffff;margin-top: 10px;">
			<el-row>
				<el-col :span="6">
					<div class="container-left">
						<ul v-if="category != null">
							<li v-for="(val,key) in category.storegoods" v-if="key>0" :class="activeB==key?active:false" v-bind:key="key" @click="selectLi(key)">
								<el-row>
									<el-col :span="4">
											<img src="//fuss10.elemecdn.com/7/59/9165195495ce2960ade8a326e8e81png.png?imageMogr/format/webp/thumbnail/26x/" alt="" width="16px" height="16px" style="float: left;" />							
									</el-col>
									<el-col :span="20" style="text-align: left;padding-left: 8px;word-wrap: break-word;">
										{{val.category}}
									</el-col>
								</el-row>
							</li>
						</ul>	
					</div>
				</el-col>
				<el-col :span="18">
					<ul v-if="category != null" class="container-right">
						<li class="goodslist" v-for="(val,key) in category.storegoods[activeB].goodslist" v-bind:key="key">
							<img v-bind:src="val.img" alt="" width="100px" height="100px"/>
							<div class="goods-detail">
								<div style="font-size: 16px;font-weight: 600;width: 80%;overflow: hidden;overflow-wrap: break-word;">{{val.goodsname}}</div>
								<div>{{val.remark}}</div>
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
		<div class="shoppingCart">
			<div>
				<div class="cart-bg">
					<div class="cart-bg-icon"></div>
					<div v-if="shoppingNum>0" class="cart-bg-icon2"></div>
					<span v-if="shoppingNum>0" class="cart-num">{{shoppingNum}}</span>
				</div>
				<p style="text-align: left;width: auto;display: inline-block;float: left;">
					<span style="color: #ffffff;font-size: 20px;">￥{{prices}}</span>
					<del style="color: #999;font-size: 14px;">￥24</del>
				</p>
			</div>
			
			<div v-bind:class="shoppingNum>0?'succes-btn':'off-btn'" @click="carttop">
				查看已选商品
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
				name:"商品列表",
				active:"active-li",
				activeB:1,
				category:null
			}
		},
//		props:['clickname'],
		beforeCreate(){
			const $this=this;
			$this.$http({
				methods:"get",
				url:"static/data/foodsArr.json",
			}).then((response)=>{
				for(let i=0;i<response.data.length;i++){
					if(response.data[i].storeid=="1061"){
						$this.category=response.data[i];
						return;
					}
				};
				console.log($this.category)
			}).catch((response)=>{
				$this.category=[];
			})
		},
		components:{
			commend:commend
		},
		computed:{
			author(){
				return this.$store.state.author
			},
			prices(){
				return 0
			}
		},
		methods:{
			shoppingNum(){
//				var $this=this;
//				let shoppingNum=0;
//				const cartlist=$this.$store.state.cartlist;
//				console.log(cartlist)
//				if(shoppingNum>0){
//					shoppingNum=0;
//				}
//				for(let i=0;i<cartlist.length;i++){
//					for(let n=0;n<cartlist[i].datalist.length;n++){
//						shoppingNum +=cartlist[i].datalist[n].num;
//					};
//				}
//				
//				return shoppingNum;
			},
			carttop(){
				let $this=this;
				$this.$router.push({
					name:'selectgoods',
					params:{
						id:"15616513"
					}
				})
				
			},
			selectLi(key){
				this.activeB=key;
			},
			handleReduce(index){
				let $this=this;
				let cartData=$this.category.storegoods[$this.activeB].goodslist[index];
				let updateDate={
					cartname:"乡村基（枫丹店）",
					datalist:[cartData]
				}
				if(cartData.num===0) return;
				cartData.num--;
				
//				this.$store.commit("cartlist",updateDate);
				
			},
			handleAdd(index){
				let $this=this;
				let cartData=$this.category.storegoods[$this.activeB].goodslist[index];
				let updateDate={
					cartname:"乡村基（枫丹店）",
					datalist:[cartData]
				}
				cartData.num++;
//				this.$store.commit("cartlist",updateDate);
				
				console.log($this.category)
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