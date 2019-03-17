<template>
	<v-app id="gelato">

<!-- 	<div class="dev-routers">
		<div v-for="page in pages" :key="page.name">
			<router-link :to="page.path" >{{ page.name }}</router-link>
		</div>현재 : {{ this.$router.currentRoute.name }}
	</div> -->

		<v-navigation-drawer
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
			app
			color="blue-grey"
			dark
			fixed
			clipped-right
			v-if="isHeaderShowing"
		>
			<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
			<v-toolbar-title class="headline text-uppercase">title</v-toolbar-title>
			<v-spacer></v-spacer>

		</v-toolbar>

		<v-content>
			<router-view></router-view>
		</v-content>

		<v-footer v-if="isFooterShowing" color="blue-grey" class="white--text" app>
			<span>Vuetify</span>
			<v-spacer></v-spacer>
			<span>&copy; 2017</span>
		</v-footer>

	</v-app>
</template>

<script>
import Setting from '@/views/Setting.vue'
import Mypage from '@/views/Mypage.vue'
import Timeline from '@/views/Timeline.vue'

export default {
	name: 'App',
	components: {
		Setting,
		Mypage,
		Timeline,
	},
	created() {
		this.$router.options.routes.forEach(route => {
			this.pages.push({
				name: route.name,
				path: route.path,
			})
		})
	},
	data () {
		return {
			isHeaderShowing: true,
			isFooterShowing: false,
			pages: [],
			drawer: null,
			drawerRight: null,
			right: false,
			left: false
		}
	}
}
</script>

<style lang="scss">
	@import "@/styles/base/_common.scss";
	@import "@/styles/base/_layout.scss";
	@import "@/styles/base/_mixins.scss";
</style>