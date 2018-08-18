import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	// 定义状态
	state: {
		author:'111',
		merchants:"menus",
	},
	mutations: {
		newAuthor(state,msg){
			state.author=msg
		},
		newMerchants(state,msg){
			state.merchants=msg;
		},
		cartlist(state,msg){
			state.cartlist=msg
		}
	}
});
export default store;
