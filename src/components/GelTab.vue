<template>
	<div class="gel-tab">
		{{name}}
	</div>
</template>

<script>
export default {
	name: 'GelTab',
	props: [ 'name'],
}
</script>

<style lang="scss">
	@import "../styles/components/gel-tab.scss";
</style>
