<template>
	<div class="gel-title-bar">
		<div class="gel-nav-btn gel-back-btn">Back</div>
		<div class="gel-title-name">{{ title }}</div>
		<div class="gel-nav-btn gel-menu-btn">Menu</div>
	</div>
</template>

<script>
export default {
	name: 'GelTitleBar',
	props: {
		title: String
	}
}
</script>

<style lang="scss">
	@import "../styles/components/gel-title-bar.scss";
</style>
