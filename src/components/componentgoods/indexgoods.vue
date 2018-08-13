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
				        	{{dropdown}}<i class="el-icon-arrow-down el-icon--right dropdown-icon"></i>
				     	</div>
				     	<el-dropdown-menu slot="dropdown">
					        <el-dropdown-item v-for="(value,key) in droplist" v-bind:command="value.name" v-bind:key="key">{{value.name}}</el-dropdown-item>
					    </el-dropdown-menu>
					</el-dropdown>
				</el-menu-item>
				<el-menu-item index="2" class="screen-list">距离最近</el-menu-item>
				<el-menu-item index="3" class="screen-list">品质联盟</el-menu-item>
				<el-menu-item index="4" class="screen-list">筛选</el-menu-item>
			</el-menu>
		</div>
		<div class="goodslist-box">
			<goodslist></goodslist>
		</div>
	</div>
</template>

<script>
	import goodssort from './goodssort';
	import goodslist from './goodslist';
	export default{
		name:"goods",
		data(){
			return {
				name:"goods",
				dropdown:'综合排序',
				droplist:''
			}
		},
		components:{
			goodssort:goodssort,
			goodslist:goodslist
		},
		created(){
			this.loaddrop()
		},
		methods:{
			handleCommand(command) {
		    	this.dropdown=command;
		    },
		    handleCheck(index){
		    	console.log(index)
		    },
		    loaddrop(){
		    	let $this=this;
		    	$this.$http({
		    		method:"get",
		    		url:"api/b/restapi/shopping/v1/restaurants/outside_filter/attributes",
		    		params:{
		    			latitude:"30.573095",
		    			longitude:"104.066143",
		    			terminal:"h5"
		    		}
		    	}).then((response)=>{
		    		$this.droplist=response.data.inside_sort_filter;
		  
		    	}).catch((response)=>{
		    		console.log(response)
		    	})
		    }
		}
	}
	
</script>

<style scoped>
	*{
		border: none;
	}
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
		padding:0 !important;
	}
	.is-active{
		color: #333;
		background: none;
	}
	.is-active:hover,.is-active:focus{
		background: none;
	}
	.is-active div{
		color: #333;
	}
	.dropdown-icon{
		width: 14px;
		font-size: 12px;
		margin-left: 0;
	}
</style>