<template>
	<el-row>
		<el-col v-for="(itme,key) in datalist" :span="24" class="list-box" v-bind:key="key">
			<div >
				<div @click="tomerchant()">
					<div class="merchants-logo">
						<img src="https://fuss10.elemecdn.com/7/9f/dd6421c5d53235ff472a69530ca8djpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"/>
					</div>
					<div class="merchants-detail">
						<div class="merchants-name"><h3><i></i>{{itme.restaurant.name}}</h3></div>
						<div><el-rate
						  v-model="itme.restaurant.rating"
						  disabled
						  show-score
						  text-color="#ff9900"
						  score-template="{value}">
						</el-rate></div>
						<div>
							<div class="price-box">
								<span>￥{{itme.restaurant.float_minimum_order_amount}}起送</span>
								<span>配送费￥{{itme.restaurant.float_delivery_fee}}</span>
							</div>
							<div class="date-box">
								<span>{{itme.restaurant.distance/1000}}km</span>
								<span>{{itme.restaurant.order_lead_time}}分钟</span>
							</div>
						</div>
						
					</div>
				</div>
				
				<div class="activity-box">
					<el-collapse >
						<el-collapse-item name="1">
							<template slot="title" >
								<div class="activity-title" v-for="(val,key) in itme.restaurant.activities" v-if="key==0">
									<span><span class="subtract-icon">{{val.icon_name}}</span>{{val.description}}</span>
									<span class="activity-num">{{Object.keys(itme.restaurant.activities).length}}个活动</span>
								</div>
								
							</template>
							<div class="activity-list" v-for="(c,key) in itme.restaurant.activities" v-if="key>0" v-bind:key="key"><span class="subtract-icon">{{c.icon_name}}</span>{{c.description}}</div>
						</el-collapse-item>
					</el-collapse>
				</div>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name:"goodslist",
		data(){
			return {
				name:"商品列表",
				datalist:'',
				offset:8,
				loadof:false,// 判断上一次数据是否加载完成
			}
		},
		created(){// 初始化钩子函数
			this.loadgoods()
		},
		mounted(){
			let $this=this;
			
			window.addEventListener("scroll",function(){
				var loadoffset=$this.offset;
				var scrollOffset=document.documentElement.scrollTop + window.innerHeight;// 获取滚动位置
				var bodyHeight=document.body.offsetHeight;// 文档高度
				if(scrollOffset>=bodyHeight&&$this.loadof==true){
					console.log(111)
					$this.offset=loadoffset+8;
					$this.loadof=false;
					$this.onloadGoods(loadoffset+8);
				};
			})
		},
		methods:{
			loadgoods(){
				let $this=this;
				$this.$http({
					method:"get",
					url:"api/b/restapi/shopping/v3/restaurants",
					params:{
						latitude:"30.573095",
						longitude:"104.066143",
						terminal:"h5",
						offset:"0",
						limit:"8",
						extras: "activities",
						extra_filters: "home",
						rank_id:"" 
					}
				}).then((response)=>{
					console.log(response.data.items);
					$this.datalist=response.data.items;
					$this.loadof=true;
				}).catch((response)=>{
					console.log(response)
				})
			},
			onloadGoods(offset){
				let $this=this;
				$this.$http({
					method:"get",
					url:"api/b/restapi/shopping/v3/restaurants",
					params:{
						latitude:"30.573095",
						longitude:"104.066143",
						terminal:"h5",
						offset:offset,
						limit:"8",
						extras: "activities",
						extra_filters: "home",
						rank_id:"" 
					}
				}).then((response)=>{
					if($this.loadof==false){
						console.log(response.data.items);
						for(var i=0;i<response.data.items.length;i++){
							$this.datalist.push(response.data.items[i])	
						};
						$this.loadof=true;
					}
					
				}).catch((response)=>{
					console.log(response)
				})
			},
			tomerchant(){
				console.log(222)
				this.$router.push({path:'/merchant'})
			}
		}
	}
	
</script>

<style scoped>
	.list-box{
		padding: 12px 10px;
	}
	.merchants-logo{
		width: 60px;
		height: 60px;
		float: left;
	}
	.merchants-logo>img{
		width: 100%;
		height: 100%;
	}
	.merchants-detail{
		height: 100%;
		float: left;
		box-sizing: border-box;
		padding-left: 10px;
	}
	.merchants-detail>div{
		align-items: center;
		text-align: left;
	}
	.merchants-name{
		font-size: 0.8rem;
	}
	.merchants-name>h3{
		margin: 0;
		width: auto;
	}
	.price-box{
		font-size: 12px;
		color: #666666;
		float: left;
	}
	.date-box{
		font-size: 12px;
		color: #666666;
		float: left;
		margin-left: 100px;
	}
	.activity-box{
		width: 100%;
		clear: both;
		text-align: left;
		box-sizing: border-box;
		padding-left: 70px;
		
	}
	.activity-title{
		font-size: 12px;
		color: #666666;
	}
	.activity-num{
		float: right;
	}
	.activity-list{
		font-size: 12px;
		color: #666666;
	}
	.subtract-icon{
		background-color: rgb(240, 115, 115);
		width: 14px;
		height: 14px;
		padding: 2px;
		font-size: 12px;
		text-align: center;
		border-radius: 4px;
		color: #ffffff;
		margin-right: 5px;
	}
</style>