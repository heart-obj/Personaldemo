<template>
	<div>
		<el-header class="box_h">
			<div class="index_h_t">饿了么</div>
			<el-row class="index_h_d">
				<el-col :span="8" class="index_h_dw">
					<i class="el-icon-location-outline"></i>
					<span>名著司南</span>
					<i class="el-icon-caret-bottom"></i>
				</el-col>
				<el-col :span="8" :offset="8">
					<el-row>
						<el-col :span="24" class="header_tq">
							<span>{{weathers}}</span>
							<span>{{temperature}}</span>
						</el-col>
					</el-row>
				</el-col>
			</el-row>
		</el-header> 
		<div class="check_box">
			<el-button class="check_btn" type="primary" icon="el-icon-search">搜索饿了么商家、商品名称</el-button>
		</div>
		<el-main class="content_box">
			<componentgoods></componentgoods>
		</el-main>
	</div>
</template>

<script>
	import componentgoods from '../componentgoods/indexgoods';
	
	export default{
		name:'homepage',
		data(){
			return{
				name:'homepage',
				temperature:'',
				weathers:''
			}
		},
		components:{
			componentgoods:componentgoods
		},
		mounted(){
			this.weather();
		},
		methods:{
			weather(){
				this.$http({
					method:"get",
					url:"api/open/api/weather/json.shtml",
					params:{
						city:"成都"
					}
				}).then((response)=>{
					var weekArr=new Array("星期日","星期一","星二","星期三","星期四","星期五","星期六");
					
					var week=new Date().getDay();
					console.log(weekArr[week]);
					var weekData=response.data.data.forecast;
					for(var i=0;i<weekData.length;i++){
						if(weekData[i].date.indexOf(weekArr[week])!=-1){
							this.temperature=weekData[i].high;
							this.weathers=weekData[i].type
						}
					}
				}).catch((response)=>{
					console.log(response)
				})
			}
		}
	}
</script>

<style scoped>
	.box_h{
	    background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#0af), to(#0085ff));
	    background-image: -webkit-linear-gradient(left, #0af, #0085ff);
	    background-image: -moz-linear-gradient(left, #0af, #0085ff);
	    background-image: -o-linear-gradient(left, #0af, #0085ff);
	    background-image: linear-gradient(left, #0af, #0085ff);
		height: auto !important;
		color: #ffffff;
		width: 100%;
	}
	.index_h_t{
		height: 50px;
		line-height: 50px;
		text-align: left;
		color: #ffffff;
	}
	.index_h_d{
		height: 50px;
		
	}
	.index_h_d div{
		height: 100%;
	}
	.index_h_dw{
		line-height: 50px;
		text-align: left;
	}
	.header_tq div{
		width: auto;
		float: left;
	}
	.header_tq span{
		display: inline-block;
		line-height: 30px;
		height: 50%;
		width: 100%;
		text-align: right;
	}
	.check_box{
		width: 100%;
		height: 60px;
		box-sizing: border-box;
		background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#0af), to(#0085ff));
	    background-image: -webkit-linear-gradient(left, #0af, #0085ff);
	    background-image: -moz-linear-gradient(left, #0af, #0085ff);
	    background-image: -o-linear-gradient(left, #0af, #0085ff);
	    background-image: linear-gradient(left, #0af, #0085ff);
	    position: sticky;
	    top: 0;
	    padding: 10px 15px;
	}
	.check_btn{
		width: 100%;
		height: 100%;
		background: #ffffff;
		text-align: center;
		color: #9e9e9e;
		font-size: 14px;
	}
	
	.content_box{
		width: 100%;
		padding: 0;
	}
</style>