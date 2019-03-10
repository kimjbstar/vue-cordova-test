<template>
	<div class="gel-tabs">
		<template v-for="(tab, index) in items">
			<gel-tab :key="index" :item="tab"/>
		</template>
	</div>
</template>

<script>
import GelTab from './GelTab.vue'
export default {
	name: 'GelTabs',
	props: [ 'items' ,'foo'],
	components : {
		GelTab,
	},
}
</script>

<style lang="scss">
	@import "../styles/components/gel-tabs.scss";
</style>
