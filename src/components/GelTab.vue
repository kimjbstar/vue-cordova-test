<template>
	<div class="gel-tab">
		<router-link :to="'/'+item.name">{{item.name}}</router-link>
	</div>
</template>

<script>
export default {
	name: 'GelTab',
	props: [ 'item'],
}
</script>

<style lang="scss">
	@import "../styles/components/gel-tab.scss";
</style>
