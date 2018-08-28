import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	// 定义状态
	state: {
		author:'111',
		merchants:"menus",
		order:[],
		addGoods:[],
		showShopping:true
	},
	mutations: {
		newAuthor(state,msg){
			state.author=msg
		},
		newMerchants(state,msg){
			state.merchants=msg;
		},
		cartlist(state,msg){ // 选中物品数据
			state.cartlist=msg
		},
		order(state,msg){// 订单数据
			state.order.push({msg})
		},
		addGoods(state,msg){ // 购物车数据
			state.addGoods.push({msg})
		},
		showShopping(state,msg){// 是否显示购物车
			state.showShopping=msg
		}
	}
});
export default store;
