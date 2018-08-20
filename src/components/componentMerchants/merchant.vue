<template>
	<div class="merchant-box">
		<el-container>
			<el-header class="header-boxs">
				<div  class="header-box" style='background-image: url("//fuss10.elemecdn.com/9/3c/6b80be5df28b2d1bb2df8527b604cpng.png?imageMogr/format/webp/thumbnail/750x/thumbnail/!40p/blur/50x40/");'>
					<div class="cover-box">
						<div class="to-index el-icon-arrow-left" @click="handclick()"></div>
					</div>
				</div>
				<div class="header-name">
					<h3 class="merchant-name" @click="open() ">乡村基（枫丹店）<i class="el-icon-caret-right"></i></h3>
					<div>
						<span class="introduce">评价5.0</span>
						<span class="introduce">月售23单</span>
						<span class="introduce">蜂鸟快送约32分钟</span>
					</div>
					<div class="discounts-box">
						<div class="discounts-t">
							<p>
								<span class="price">￥9</span>
								<span>无门槛</span>
							</p>
							<p>
								<span @click="open10()">领取</span>
							</p>
						</div>
					</div>
					<div>
						<span>满减</span>
						<span>满30减3，满50减20</span>
						<span>16个优惠 <i class="el-icon-caret-bottom"></i></span>
					</div>
					<div class="notice">公告：欢迎光临，用餐高峰期请提前下单，谢谢</div>
					<div class="merchant-logo">
						<img src="//fuss10.elemecdn.com/9/3c/6b80be5df28b2d1bb2df8527b604cpng.png?imageMogr/format/webp/thumbnail/150x/" width="100%" height="100%"/>
					</div>
				</div>
			</el-header>
			<div>
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handclickTabs">
					<el-row>
						<el-col :span="8">
							<el-menu-item index="menus" class="list-li">点餐</el-menu-item>
						</el-col>
						<el-col :span="8">
							<el-menu-item index="comments" class="list-li">评价</el-menu-item>
						</el-col>
						<el-col :span="8">
							<el-menu-item index="merchantsdetails" class="list-li">商家</el-menu-item>
						</el-col>
					</el-row>
				</el-menu>
			</div>
			<el-container>
				<div :is="showModel" v-bind:clickname="name"></div>
			</el-container>
		</el-container>
	</div>
	
</template>

<script>
	import menus from './menuslist';
	import comments from './comments';
	import merchantsdetails from './merchantsdetails';
	export default {
		name:"merchant",
		data(){
			return {
				name:"商家",
				activeIndex:"1",
				menus:"menus",
				comments:"comments",
				merchantsdetails:"merchantsdetails",
				
			}
		},
		components:{
			menus:menus,
			comments:comments,
			merchantsdetails:merchantsdetails,
		},
		computed:{
			showModel(){
				return this.$store.state.merchants
			}
		},
		methods:{
			handclick(){
				this.$router.push({path:'/home'})
			},
			open() {
		        this.$alert('这是一段内容', '标题名称', {
		         	dangerouslyUseHTMLString: true,
		         	center:true,
		         	showCancelButton:false,
		         	showConfirmButton:false,
		         	closeOnClickModal:true
		        });
		    },
			open10() {
		       	this.$notify({
		          	title: '自定义位置',
		         	 message: '左上角弹出的消息',
		         	 position: 'bottom'
		        });
      		},
      		handclickTabs(index,keyPath){
      			console.log(index)
      			this.name=index;
      			this.$store.commit("newAuthor",index);
      			this.$store.commit("newMerchants",index);
      		}
      	
		}
	}
</script>

<style scoped>
	.header-boxs{
		padding: 0;
		height: auto !important;
		font-size: 12px;
	}
	.header-box{
		height: 110px !important;
		background-size:cover;
		background-repeat: no-repeat;
		background-position: 0px 0px;
		position: relative;
	}
	.cover-box{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(119,103,137,.43);
	}
	.to-index{
		width: 16px;
		height: 16px;
		position: absolute;
		left: 10px;
		top: 10px;
		color: #ffffff;
		font-size: 24px;
		font-weight: 600;
	}
	.header-name{
		padding-top: 10px;
		position: relative;
	}
	.merchant-name{
		font-size: 24px;
		margin-bottom: 10px;
		
	}
	.introduce{
		margin-right: 10px;
		font-size: 12px;
		color: #666666;
	}
	.discounts-box{
		padding:10px 0;
		color: #594519;
		font-size: 12px;
    	
	}
	.discounts-t{
		background: #ffe578;
		height: 100%;
		width: auto;
		display: inline-block;
		padding: 5px 10px;
	}
	.discounts-t>p{
		width: auto;
		display: inline-block;
		margin: 0;
	}
	.price{
		font-weight:600;
		font-size: 14px;
	}
	.notice{
		margin: 10px 0;
	}
	.merchant-logo{
		width: 80px;
		height: 80px;
		background: red;
		position: absolute;
		left: 50%;
		top: 0;
		margin-left: -40px;
		margin-top: -60px;
		z-index: 99;
	}
	
</style>