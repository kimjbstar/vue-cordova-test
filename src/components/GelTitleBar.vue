<template>
	<div class="gel-title-bar">
		<div class="nav-btn back-btn" v-on:click="goBack()">Back</div>
		<div class="title-name">{{ title }}</div>
		<div class="nav-btn menu-btn">Menu</div>
	</div>
</template>

<script>
export default {
	name: 'GelTitleBar',
	props: {
		title: String
	},
	methods: {
		goBack: function(){
			this.$router.back();
		}
	}
}
</script>

<style lang="scss">
	@import "../styles/components/gel-title-bar.scss";
</style>
