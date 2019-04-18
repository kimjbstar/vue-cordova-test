import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
		routes: [],
	},
	getters: {
		routes (state) {
			return state.routes;
		},
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
			if ( state.routes.length > 1 ) {
				state.routes.pop();
			}
		},
		clearHistory ( state ) {
			if ( state.routes.length > 1 ) {
				var lastRoute = state.routes[state.routes.length - 1];
				state.routes = [ lastRoute ];
			}
		}
	}
})

export default store;