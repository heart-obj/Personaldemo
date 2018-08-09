<template>
	<div class="goods_box">
		<goodssort></goodssort>
		<el-row style="padding: 10px 0;">
			<i class="el-icon-minus"></i> 推荐商家 <i class="el-icon-minus"></i>
		</el-row>
		<div class="goods_dropdown">
			<el-menu>
				<el-menu-item index="1" class="screen-list">
					<el-dropdown trigger="click" @command="handleCommand">
						<div class="el-dropdown-link">
				        	{{dropdown}}<i class="el-icon-arrow-down el-icon--right"></i>
				     	</div>
				     	<el-dropdown-menu slot="dropdown">
					        <el-dropdown-item command="综合排序">综合排序</el-dropdown-item>
					        <el-dropdown-item command="好评优先">好评优先</el-dropdown-item>
					        <el-dropdown-item command="销量最高">销量最高</el-dropdown-item>
					        <el-dropdown-item command="配送最快">配送最快</el-dropdown-item>
					        <el-dropdown-item command="配送费最低">配送费最低</el-dropdown-item>
					    </el-dropdown-menu>
					</el-dropdown>
				</el-menu-item>
				<el-menu-item index="2" class="screen-list">距离最近</el-menu-item>
				<el-menu-item index="3" class="screen-list">品质联盟</el-menu-item>
				<el-menu-item index="4" class="screen-list">筛选</el-menu-item>
			</el-menu>
		</div>
	</div>
	
</template>

<script>
	import goodssort from './goodssort';
	export default{
		name:"goods",
		data(){
			return {
				name:"goods",
				dropdown:'综合排序'
			}
		},
		components:{
			goodssort:goodssort
		},
		methods:{
			handleCommand(command) {
		    	this.dropdown=command;
		    },
		    handleCheck(index){
		    	console.log(index)
		    }
		}
	}
	
</script>

<style scoped>
	.goods_box{
		width: 100%;
		background: #ffffff;
		/*padding: 0 20px;*/
		box-sizing: border-box;
		overflow: hidden;
	}
	.goods_dropdown{
		width: 100%;
		color: #666;
		font-weight:600;
		
			
	}
	.screen-list{
		height: 100%;
		width: 25%;
		float: left;
		line-height: 30px;
		color: #666;
	}
	
</style>