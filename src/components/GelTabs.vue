<template>
	<div class="gel-tabs">
		<template v-for="(tab, index) in tabs">
			<gel-tab :key="index" :name="tab.name"/>
		</template>
	</div>
</template>

<script>
import GelTab from './GelTab.vue'
export default {
	name: 'GelTabs',
	props: [ 'tabs' ,'foo'],
	components : {
		GelTab,
	},
	created() {
		// Console.log('this.tabs', this.tabs);
		// Console.log('this.$props', this.$props);
	}
}
</script>

<style lang="scss">
	@import "../styles/components/gel-tabs.scss";
</style>
