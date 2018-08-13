<template>
	<el-row>
		<el-col :span="24" class="list-box">
			<div>
				<div class="merchants-logo">
					<img src="https://fuss10.elemecdn.com/7/9f/dd6421c5d53235ff472a69530ca8djpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"/>
				</div>
				<div class="merchants-detail">
					<div class="merchants-name"><h3><i></i>德克士</h3></div>
					<div><el-rate
					  v-model="value5"
					  disabled
					  show-score
					  text-color="#ff9900"
					  score-template="{value}">
					</el-rate></div>
					<div>
						<div class="price-box">
							<span>￥39起送</span>
							<span>配送费￥5</span>
						</div>
						<div class="date-box">
							<span>2.19km</span>
							<span>40分钟</span>
						</div>
					</div>
					
				</div>
				<div class="activity-box">
					<el-collapse >
						<el-collapse-item name="1" >
							<template slot="title" >
								<div class="activity-title">
									<span>满20减11，满40减16，满80减32</span>
									<span class="activity-num">活动6</span>
								</div>
								
							</template>
							<div class="activity-list">五折优惠享不停！！！</div>
						</el-collapse-item>
					</el-collapse>
				</div>
			</div>
		</el-col>
		<el-col :span="24" class="list-box">
			<div>
				<div class="merchants-logo">
					<img src="https://fuss10.elemecdn.com/7/9f/dd6421c5d53235ff472a69530ca8djpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"/>
				</div>
				<div class="merchants-detail">
					<div class="merchants-name"><h3><i></i>德克士</h3></div>
					<div><el-rate
					  v-model="value5"
					  disabled
					  show-score
					  text-color="#ff9900"
					  score-template="{value}">
					</el-rate></div>
					<div>
						<div class="price-box">
							<span>￥39起送</span>
							<span>配送费￥5</span>
						</div>
						<div class="date-box">
							<span>2.19km</span>
							<span>40分钟</span>
						</div>
					</div>
					
				</div>
				<div class="activity-box">
					<el-collapse >
						<el-collapse-item name="1" >
							<template slot="title" >
								<div class="activity-title">
									<span>满20减11，满40减16，满80减32</span>
									<span class="activity-num">活动6</span>
								</div>
								
							</template>
							<div class="activity-list">五折优惠享不停！！！</div>
						</el-collapse-item>
					</el-collapse>
				</div>
			</div>
		</el-col>
		<el-col :span="24" class="list-box">
			<div>
				<div class="merchants-logo">
					<img src="https://fuss10.elemecdn.com/7/9f/dd6421c5d53235ff472a69530ca8djpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"/>
				</div>
				<div class="merchants-detail">
					<div class="merchants-name"><h3><i></i>德克士</h3></div>
					<div><el-rate
					  v-model="value5"
					  disabled
					  show-score
					  text-color="#ff9900"
					  score-template="{value}">
					</el-rate></div>
					<div>
						<div class="price-box">
							<span>￥39起送</span>
							<span>配送费￥5</span>
						</div>
						<div class="date-box">
							<span>2.19km</span>
							<span>40分钟</span>
						</div>
					</div>
					
				</div>
				<div class="activity-box">
					<el-collapse >
						<el-collapse-item name="1" >
							<template slot="title" >
								<div class="activity-title">
									<span>满20减11，满40减16，满80减32</span>
									<span class="activity-num">活动6</span>
								</div>
								
							</template>
							<div class="activity-list">五折优惠享不停！！！</div>
						</el-collapse-item>
					</el-collapse>
				</div>
			</div>
		</el-col>
		<el-col :span="24" class="list-box">
			<div>
				<div class="merchants-logo">
					<img src="https://fuss10.elemecdn.com/7/9f/dd6421c5d53235ff472a69530ca8djpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"/>
				</div>
				<div class="merchants-detail">
					<div class="merchants-name"><h3><i></i>德克士</h3></div>
					<div><el-rate
					  v-model="value5"
					  disabled
					  show-score
					  text-color="#ff9900"
					  score-template="{value}">
					</el-rate></div>
					<div>
						<div class="price-box">
							<span>￥39起送</span>
							<span>配送费￥5</span>
						</div>
						<div class="date-box">
							<span>2.19km</span>
							<span>40分钟</span>
						</div>
					</div>
					
				</div>
				<div class="activity-box">
					<el-collapse >
						<el-collapse-item name="1" >
							<template slot="title" >
								<div class="activity-title">
									<span>满20减11，满40减16，满80减32</span>
									<span class="activity-num">活动6</span>
								</div>
								
							</template>
							<div class="activity-list">五折优惠享不停！！！</div>
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
				value5:4.7
			}
		},
		created(){
			this.loadgoods()
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
						extras: "tags",
						extra_filters: "home",
						rank_id:"" 
					}
				}).then((response)=>{
					console.log(response.data.items);
					datalist=response.data.items
				}).catch((response)=>{
					console.log(response)
				})
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
</style>