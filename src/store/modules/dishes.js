import Vue from 'vue'
import Vuex from 'vuex'
import dishes from './modules/dishes'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state: {
		counter: 0
	},
	// plugins: debug ? [createLogger()] : []
});