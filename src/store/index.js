import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
		routes: [],
	},
	getters: {
		routesCount (state) {
			return state.routes.length;
		},
	},
	mutations: {
		increment (state) {
			state.count++
		},
		pushHistory (state, route) {
			state.routes.push(route);
		},
		popHistory ( state ) {
			state.routes.pop();
		},
		clearHistory ( state ) {
			state.routes = [];
		}
	}
})

export default store;