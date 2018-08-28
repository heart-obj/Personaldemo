<template>
	<div>
		<el-container style="padding-bottom: 60px;position: relative;">
			<el-header class="header-box">
				<div class="to-index-box" @click="tomerchants"><i class="to-index el-icon-arrow-left"></i></div>
				<h3>{{name}}</h3>
			</el-header>
			<el-main class="goods-box">
				<el-row>
					<el-col :span="24" v-for="(val,key) in goodslist" v-bind:key="key">
						<div style="height: 40px;line-height: 40px;border-bottom: 1px solid #e0e0e0;"><span style="float: left;font-size: 20px;">{{val.msg.cartname}}<i class="el-icon-arrow-right"></i></span></div>
						<div class="goodslist-box" v-for="(list,key) in val.msg.datalist" v-bind:key="key">
							<img src="//fuss10.elemecdn.com/a/81/6b9f7e5a4e1e5e4fe2c119ff4fd44jpeg.jpeg?imageMogr/format/webp/" alt="" width="50px" height="50px"/>  
							<span>
								<span style="float: left;">{{list.goodsname}}</span>
								<span class="el-icon-delete" style="float: right;"></span>
							</span>
							<span>
								<span style="float: left;">X{{list.num}}</span>
								<span style="float: right;">￥{{list.price*list.num}}</span>
							</span>
						</div>
						<div style="border-bottom: 1px solid #e0e0e0;width: 100%;height: 60px;padding: 10px 0;line-height: 40px;box-sizing: border-box;">
							<span>
								合计：{{price(key)}}元
							</span>
							<div class="delet-btn">删除</div>
							<div class="submit-btn" @click="goodsindex(key,price(key))">付款</div>
						</div>
						
					</el-col>
					
				</el-row>
			</el-main>
			<el-dialog
			  title="是否付款？"
			  :visible.sync="dialogVisible"
			  :close-on-click-modal=false
			  width="80%"
			  :before-close="closemodel">
			  <span>金额：{{submitPrice}}元</span>
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">取 消</el-button>
			    <el-button type="primary" @click="payment(index)">确 定</el-button>
			  </span>
			</el-dialog>
		</el-container>
		
	</div>
</template>

<script>
	export default {
		name:"shoppingcart",
		data(){
			return{
				name:"购物车",
				goodslist:'',
				dialogVisible:false,
				submitPrice:0,
				index:""
			}
		},
		created(){// el挂载之前调用
			let $this=this;
			let goods=$this.$store.state.addGoods;
			if(goods){
				$this.goodslist=goods
			}
			
		},
		methods:{// 用于定义事件
			tomerchants(){
				this.$router.push({path:'/home'});
				this.$store.commit("showShopping",true)
			},
			closemodel(){
				this.dialogVisible=false;
			},
			goodsindex(index,price){
				this.dialogVisible = true;
				this.submitPrice=price;
				this.index=index;
			},
			price(index){
				const $this=this;
				let goods=$this.goodslist[index].msg.datalist;
				let price=0;
				for(var i=0;i<goods.length;i++){
					price+=goods[i].num*goods[i].price
				};
				return price
			},
			prices(){
				
			},
			payment(index){
				console.log(index)
				let $this=this;
				$this.$store.commit("order",$this.goodslist[index].msg)
				
				$this.dialogVisible=false;
			},
			
		}
	}
</script>

<style scoped>
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
	
	.goodslist-box{
		width: 100%;
		margin-top: 10px;
		border-bottom: 1px solid #e0e0e0;
	}
	.goodslist-box>img{
		float: left;
	}
	.goodslist-box>span{
		display: block;
		width: 100%;
		height: 30px;
		box-sizing: border-box;
		padding-left: 60px;
	}
	.delet-btn{
		padding: 8px 15px;
		background: red;
		height: 20px;
		color: #ffffff;
		font-size: 14px;
		display: inline-block;
		border-radius: 4px;
		float: right;
		line-height: 20px;
	}
	.submit-btn{
		padding: 8px 15px;
		height: 20px;
		background: #0085FF;
		color: #ffffff;
		font-size: 14px;
		display: inline-block;
		border-radius: 4px;
		float: right;
		margin-right: 10px;
		line-height: 20px;
		
	}
	
	.change-btn{
		font-size: 26px;
		color: rgb(0, 133, 255);
	}
	.payment_btn{
		width: 100%;
		height: 60px;
		background-image: -webkit-gradient(linear, left top, right top, from(#0af), to(#0085ff));
		position: fixed;
		bottom: 0;
		left: 0;
		line-height: 60px;
		font-size: 24px;
		color: #ffffff;
	}
</style>