import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from './views/HomeIndex.vue'
import Mypage from './views/Mypage.vue'
import PostDetail from './views/PostDetail.vue'
import LoginIndex from './views/LoginIndex.vue'
import JoinForm from './views/JoinForm.vue'
import LoginForm from './views/LoginForm.vue'
import DishDetail from './views/DishDetail.vue'

Vue.use(Router)

export default new Router({
	mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home-index',
			component: HomeIndex,
		},
		{
			path: '/mypage',
			name: 'mypage',
			component: Mypage,
			children: [],
		},
		{
			path: '/login-index',
			name: 'login-index',
			component: LoginIndex,
			children: [],
		},
		{
			path: '/login-form',
			name: 'login-form',
			component: LoginForm,
			children: [],
		},
		{
			path: '/join-form',
			name: 'join-form',
			component: JoinForm,
			children: [],
		},
		{
			path: '/post-detail/:postId',
			name: 'post-detail',
			component: PostDetail,
			children: [],
		},
		{
			path: '/dish-detail',
			name: 'dish-detail',
			component: DishDetail,
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