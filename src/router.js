import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TabTimeline from './views/TabTimeline.vue'
import TabFriend from './views/TabFriend.vue'
import TabSetting from './views/TabSetting.vue'
import PostDetail from './views/PostDetail.vue'


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
			component: TabTimeline,
			children: [
				{
					path: 'post-detail/:postId',
					name: 'post-detail',
					component: PostDetail,
				},
			]
		},
		{
			path: '/friend',
			name: 'friend',
			component: TabFriend,
			children: [],
		},
		{
			path: '/setting',
			name: 'setting',
			component: TabSetting,
			children: [],
		},
		// {
		// 	path: "*",
		// 	component: { template: '<div>404</div>'},
		// }
	]
})