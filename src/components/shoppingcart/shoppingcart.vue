<template>
	<div>
		<el-container>
			<el-header class="header-box">
				<div class="to-index-box" @click="tomerchants"><i class="to-index el-icon-arrow-left"></i></div>
				<h3>{{name}}</h3>
			</el-header>
			<el-main class="goods-box">
				<el-row>
					<el-col :span="24" class="table-h">
						<el-row>
							<el-col :span="8">商品名称</el-col>
							<el-col :span="4">数量</el-col>
							<el-col :span="6">价格</el-col>
							<el-col :span="6">操作</el-col>
						</el-row>
					</el-col>
					<el-col :span="24">
						<div class="goods-col" v-for="(val,key) in goodslist" v-if="val.num>0">
							<el-row>
								<el-col :span="8" class="goods-name">{{val.goodsname}}</el-col>
								<el-col :span="4" class="goods-num">{{val.num}}</el-col>
								<el-col :span="6" class="goods-prices">{{val.price}}</el-col>
								<el-col :span="6" class="operate-btn">
									<i class="el-icon-remove change-btn" @click="reducenum(key)"></i>
									<i class="el-icon-circle-plus change-btn" @click="addnum(key)"></i>
								</el-col>
							</el-row>
						</div>
					</el-col>
				</el-row>
			</el-main>
			<div class="payment_btn" @click="dialogVisible = true">
				付款
			</div>
			<el-dialog
			  title="是否付款？"
			  :visible.sync="dialogVisible"
			  :close-on-click-modal=false
			  width="80%"
			  :before-close="closemodel">
			  <span>金额：￥100</span>
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">取 消</el-button>
			    <el-button type="primary" @click="payment()">确 定</el-button>
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
				goodslist:[],
				dialogVisible:false
			}
		},
		created(){
			let $this=this;
			let goods=$this.$store.state.cartlist;
			console.log(goods)
			if(goods){
				for(var i = 0;i<goods.length;i++){
					if(goods[i].num>0){
						$this.goodslist.push(goods[i])
					};
				}
			}
			
		},
		methods:{
			tomerchants(){
				this.$router.push({path:'/merchant'})
			},
			addnum(index){
				let $this=this;
				let goods=$this.$store.state.cartlist;
				console.log($this.$store.state.order)
				goods[index].num++
			},
			reducenum(index){
				let $this=this;
				let goods=$this.$store.state.cartlist;
				if(goods[index].num==0){
					return
				}
				goods[index].num--
			},
			closemodel(){
				this.dialogVisible=false;
			},
			payment(){
				let $this=this;
				this.$store.commit("order",$this.goodslist)
				
			}
		}
	}
</script>

<style scoped>
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
	.table-h{
		border-bottom: 1px solid #e6e6e6;
		padding: 10px;
		font-size: 16px;
		font-weight:600;
		color: rgb(0,133,255);
	}
	.goods-box{
		padding: 0px;
	}
	.goods-col{
		padding: 20px 10px;
		height: 30px;
		line-height: 30px;
		border-bottom: 1px solid #e6e6e6;
	}
	.goods-name,.goods-num,.goods-prices{
		color: red;
		font-size: 16px;
		font-weight: 600;
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