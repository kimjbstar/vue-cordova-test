import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Timeline from './views/Timeline.vue'
import Friends from './views/Friends.vue'
import Setting from './views/Setting.vue'
import Mypage from './views/Mypage.vue'
import PostDetail from './views/PostDetail.vue'
import Components from './views/Components.vue'
import Login from './views/Login.vue'


Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/timeline',
			name: 'timeline',
			component: Timeline,
		},
		{
			path: '/friend',
			name: 'friend',
			component: Friends,
			children: [],
		},
		{
			path: '/setting',
			name: 'setting',
			component: Setting,
			children: [],
		},
		{
			path: '/mypage',
			name: 'mypage',
			component: Mypage,
			children: [],
		},
		{
			path: '/components',
			name: 'components',
			component: Components,
			children: [],
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			children: [],
		},
		// {
		// 	path: "*",
		// 	component: { template: '<div>404</div>'},
		// }
	]
})

// children: [
// 	{
// 		path: 'post-detail/:postId',
// 		name: 'post-detail',
// 		component: PostDetail,
// 	},
// ]