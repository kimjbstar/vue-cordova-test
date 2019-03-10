<template>
	<div id="app">
		<div class="dev-routers">
			<div v-for="page in pages" :key="page.name">
			<router-link :to="page.path" >
				{{page.name}}
			</router-link>
			</div>
			현재 : {{ this.$router.currentRoute.name }}
		</div>

		<div class="gel-view">
			<gel-title-bar title="gelato project !!"/>
			<transition name="slide-fade">
				<router-view></router-view>
			</transition>
			<gel-tabs :items="tabs" :foo="'bar'"></gel-tabs>
		</div>
	</div>
</template>

<script>
import GelTabs from '@/components/GelTabs.vue'
import GelTitleBar from '@/components/GelTitleBar.vue'

export default {
	components: {
		GelTabs,
		GelTitleBar,
	},
	created() {
		this.$router.options.routes.forEach(route => {
			this.pages.push({
				name: route.name,
				path: route.path,
			})
		})
	},
	data: function() {
		return {
			pages: [],
			tabs : [
				{
					name: 'timeline',
				}, {
					name: 'friend',
				}, {
					name: 'setting',
				}
			],
		}
	}
}
</script>

<style lang="scss">
	@import "@/styles/base/_common.scss";
	@import "@/styles/base/_layout.scss";
	@import "@/styles/base/_mixins.scss";
</style>