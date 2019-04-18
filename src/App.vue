<template>
	<v-app id="gelato">
<!-- 	<div class="dev-routers">
		<div v-for="page in pages" :key="page.name">
			<router-link :to="page.path" >{{ page.name }}</router-link>
		</div>현재 : {{ this.$router.currentRoute.name }}
	</div> -->

		<v-navigation-drawer
			v-if="isHeaderShowing"
			v-model="drawer"
			fixed
			app
		>

			<v-list dense>
				<v-list-tile @click.stop="$router.push('/')">
					유저1님 환영함
				</v-list-tile>

				<v-list-tile @click.stop="$router.push('home')">
					<v-list-tile-action>
						<v-icon>home</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Home</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>

				<v-list-tile @click.stop="$router.push('timeline')">
					<v-list-tile-action>
						<v-icon>face</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>타임라인</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>


				<v-list-tile @click.stop="$router.push('mypage')">
					<v-list-tile-action>
						<v-icon>face</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>마이페이지</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>

				<v-list-tile @click.stop="$router.push('setting')">
					<v-list-tile-action>
						<v-icon>settings</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>설정</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>

				<v-list-tile @click.stop="$router.push('components')">
					<v-list-tile-action>
						<v-icon>settings</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>컴포넌트테스트</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>


			</v-list>
		</v-navigation-drawer>


		<v-toolbar
			flat
			height="44"
			color="transparent"
			v-if="isHeaderShowing"
			:key="'v-toolbar'"
		>

			<v-toolbar-side-icon v-if="showBackButton" @click.stop="$router.go(-1)">
				<v-icon>arrow_back</v-icon>
			</v-toolbar-side-icon>
			<v-toolbar-side-icon v-if="showSidebar" @click.stop="drawer = !drawer">
			</v-toolbar-side-icon>
			<v-toolbar-title class="v-toolbar-title-center">
				{{ this.$router.currentRoute.name }}
			</v-toolbar-title>
			<v-spacer></v-spacer>

		</v-toolbar>

		<v-content id="v-content" :key="'v-content'">
			<!-- <v-container fluid id="v-container"> -->
				<transition name="fade">
					<router-view></router-view>
				</transition>
			<!-- </v-container> -->
		</v-content>

		<v-bottom-nav
		:active.sync="bottomNav"
		:value="showBottomNav"
		fixed
		>
			<v-btn flat value="home" v-on:click="pushRouter('/')">
				<span>Home</span>
				<v-icon>history</v-icon>
			</v-btn>

			<v-btn flat value="favorites" v-on:click="pushRouter('favorites-index')">
				<span>Favorites</span>
				<v-icon>favorite</v-icon>
			</v-btn>

			<v-btn flat value="cartitem" v-on:click="pushRouter('cartitem-index')">
				<span>Cart</span>
				<v-icon>place</v-icon>
			</v-btn>

			<v-btn flat value="profile" v-on:click="pushRouter('profile-form')">
				<span>Profile</span>
				<v-icon>history</v-icon>
			</v-btn>

		</v-bottom-nav>

		<v-footer v-if="showFooter" color="blue-grey" class="white--text" app>
			<span>Vuetify</span>
			<v-spacer></v-spacer>
			<span>&copy; 2017</span>
		</v-footer>

	</v-app>
</template>

<script>

export default {
	name: 'App',
	components: {
	},
	created() {
		// for dev
		this.$router.options.routes.forEach(route => {
			this.pages.push({
				name: route.name,
				path: route.path,
			})
		})
	},

	methods : {
		pushRouter (routeName) {
			this.$router.push(routeName);
		}
	},
	computed: {
		isHeaderShowing (){
			// return ['login-index', 'home-index'].indexOf(this.$route.name) >= 0;
			return true;
		},
		showBackButton () {
			return this.$store.getters.routesCount > 1;
		},
		showSidebar () {
			return this.$store.getters.routesCount == 1;
		},
		showBottomNav () {
			return [ 'home-index', 'cartitem-index', 'favorites-index', 'profile-form' ].indexOf(this.$route.name) >= 0;
		},
		showFooter () {
			return false;
		},
	},
	data () {
		return {
			pages: [],
			drawer: null,
			bottomNav: '',

		}
	}
}
</script>

<style lang="scss">
	@import "@/styles/base/_reset.scss";
	@import "@/styles/base/_common.scss";
	@import "@/styles/base/_layout.scss";
	@import "@/styles/base/_mixins.scss";
	@import "@/styles/base/_vars.scss";
</style>