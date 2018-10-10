<template>
	
	<div class="commend-box swiper-container" v-if="cartlist">
		<div style="font-size: 26px;color: #000000;">商家推荐</div>
		<div class="swiper-wrapper">
	        <div v-for="(val,key) in cartlist" class="swiper-slide" v-bind:key="key">
	        	<div class="logo-img"><img src="//fuss10.elemecdn.com/0/ef/c440d90e4af8833e6abc5a0a1bf2djpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="" width="100%" height="100%" /></div>
	        	<div>
	        		<span class="food-name" v-bind:title="val.goodsname">{{val.goodsname}}</span>
	        		<span class="sales">月售{{val.sales}} 好评率{{val.rete}}</span>
	        	</div>
	        	<div>
	        		<span style="font-size:20px;margin-left: 2px;color: #fb5300;">￥{{val.price}}</span>
	        		<span v-if="val.num>0" class="el-icon-remove" style="color: #0085FF; margin-right: 2px;font-size: 20px;" @click="handleReduce(key)"></span>
        			<span v-if="val.num>0">{{val.num}}</span>
        			<span class="el-icon-circle-plus" style="color: #0085FF;margin-left: 2px;font-size: 20px;" @click="handleAdd(key)"></span>
	        	</div>
	        </div>
		</div>
		
	</div>
</template>

<script>
	import Swiper from 'swiper';
	export default{
		name:"comend",
		data(){
			return {
				name:"商家推荐",
				cartlist:null
			}
		},
		created(){ // 初始化之前加载
			const $this=this;
			if($this.$store.state.cartlist.length>0){
				console.log($this.$store.state.cartlist)
				for(let i=0;i<$this.$store.state.cartlist.length;i++){
					if($this.$store.state.cartlist[i].cartname == "乡村基（枫丹店）"){
						$this.cartlist=$this.$store.state.cartlist[i];
					}
				}
				
			}else{
				$this.$http({
					methods:"get",
					url:"static/data/foodsArr.json",
				}).then((response)=>{
					let datalist=response.data;
					for(let i=0;i<datalist.length;i++){
						console.log(datalist)
						if(datalist[i].storeid=="1061"){
							for(let j=0;i<datalist[i].storegoods.length;j++){
								if(datalist[i].storegoods[j].recommend==1){
									$this.cartlist=datalist[i].storegoods[j].goodslist;
									$this.$nextTick(function(){
										new Swiper('.swiper-container',{
											direction:"horizontal",
											loop: false,
											height:"100%",
											slidesPerView:3,
											slidesPerGroup:1,
											observer:true,//修改swiper自己或子元素时，自动初始化swiper
											observeParents:true//修改swiper的父元素时，自动初始化swiper
										});
									})
									break;
								}
							}
							
						}
						
					}
				})
			}
			
		},
		mounted(){// 在模板渲染完成后或者el对应的html渲染后调用
			
		},
		computed:{// 计算属性 ：复杂的逻辑计算可在此定义
			author(){
				return this.$store.state.author
			},
			
			
			
		},
		methods:{ // 事件定义
			handleReduce(index){
				if(this.cartlist[index].num--<0) return
				this.cartlist[index].num--;
				
			},
			handleAdd(index){
				this.cartlist[index].num++;
			},
			
		}
	}
</script>

<style 	>
	.commend-box{
		width: 100%;
	}
	.swiper-wrappe{
		height: 100%;
	}
	.logo-img{
		width: 120px;
		height: 120px;
		padding: 5px;
		margin: auto;	
	}
	.food-name{
		font-size: 14px;
		height: 16px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #000000;
		display: inline-block;
		width: 100%;
	}
	.sales{
		font-size: 12px;
		color: #666666;
		display: inline-block;
		width: 100%;
	}
	.select-num>span{
		display: inline-block;
		float: left;
	}
	.shoppingCart{
		position: fixed;
		bottom: 0;
		left: 0;
		background: rgba(61,61,63,.9);
		height: 60px;
		width: 100%;
		box-sizing: border-box;
		padding-left: 90px;
		z-index: 111;
	}
	.cart-bg{
		border: 6px solid #444444;
		width: 60px;
		height: 60px;
		box-sizing: border-box;
		border-radius: 50%;
		position: absolute;
		left: 20px;
		top: -15px;
		background: rgba(61,61,63,1);
		
	}
	
	.cart-bg-icon{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background:rgba(61,61,63,1) url(../../img/cart_off_icon.png)center no-repeat;
		background-size: 80%;
	}
	.cart-bg-icon2{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background:rgba(61,61,63,1) url(../../img/cart_icon.png)center no-repeat;
		background-size: 80%;
	}
	.cart-num{
		color: #ffffff;
		font-size: 12px;
		font-weight: 600;
		background: red;
		width: 20px;
		height: 20px;
		text-align: center;
		line-height: 20px;
		display: inline-block;
		border-radius: 50%;
		position: absolute;
		top: -10px;
		right: -8px;
	}
	.succes-btn{
		width: 120px;
		height: 100%;
		float: right;
		line-height: 60px;
		color: #ffffff;
		background: #38ca73;
	}
	.off-btn{
		width: 120px;
		height: 100%;
		float: right;
		line-height: 60px;
		color: #ffffff;
		background: #535356;
	}
	
</style>