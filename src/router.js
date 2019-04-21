import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from './views/HomeIndex.vue'
import Mypage from './views/Mypage.vue'
import PostDetail from './views/PostDetail.vue'
import LoginIndex from './views/LoginIndex.vue'
import JoinForm from './views/JoinForm.vue'
import LoginForm from './views/LoginForm.vue'
import DishDetail from './views/DishDetail.vue'
import FavoritesIndex from './views/FavoritesIndex.vue'
import CartitemIndex from './views/CartitemIndex.vue'
import ProfileForm from './views/ProfileForm.vue'
import DishList from './views/DishList.vue'
import CardForm from './views/CardForm.vue'
import OrderForm from './views/OrderForm.vue'
import OrderDoneIndex from './views/OrderDoneIndex.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
	mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
	base: process.env.BASE_URL,
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	},
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
			path: '/dish-detail/:dishId',
			name: 'dish-detail',
			component: DishDetail,
		},
		{
			path: '/favorites-index',
			name: 'favorites-index',
			component: FavoritesIndex,
		},
		{
			path: '/cartitem-index',
			name: 'cartitem-index',
			component: CartitemIndex,
		},
		{
			path: '/profile-form',
			name: 'profile-form',
			component: ProfileForm,
		},
		{
			path: '/dish-list',
			name: 'dish-list',
			component: DishList,
		},
		{
			path: '/card-form',
			name: 'card-form',
			component: CardForm,
		},
		{
			path: '/order-form',
			name: 'order-form',
			component: OrderForm,
		},
		{
			path: '/order-done-index',
			name: 'order-done-index',
			component: OrderDoneIndex,
		},
		{
			path: "*",
			name: '404',
			component: { template: '<div>404</div>'},
		}
	],
})

var bottomNavRouters = {
	'home-index': 'home',
	'favorites-index' : 'favorites',
	'cartitem-index': 'cartitem',
	'profile-form': 'profile',
};

router.afterEach(function (to, from) {
	if ( to.name == from.name ) {
		return false;
	}
	if ( store.state.routes.length >= 2 &&
		store.state.routes[1].name == from.name &&
		store.state.routes[0].name == to.name
	) {
		store.commit('popHistory');
	} else {
		store.commit('pushHistory', to)
	}
	if ( bottomNavRouters[to.name] ) {
		store.commit('clearHistory');
	}
});

export default router;

// children: [
// 	{
// 		path: 'post-detail/:postId',
// 		name: 'post-detail',
// 		component: PostDetail,
// 	},
// ]