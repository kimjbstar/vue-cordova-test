<template>
	<div class="page-home-index">
		<div class="container-filters">
			<div class="row-search">
				<div class="btn-filter"></div>
				<input type="text" class="search">
			</div>
			<div class="row-filter">
				<!-- select directive 필요 -->
				<!-- <input type="text" class="location">
				<input type="text" class="price">
				<input type="text" class="time"> -->
			</div>

		</div>
		<div class="section-foods"></div>
		<div class="container-categories"></div>
	</div>
</template>

<script>

export default {
	name: 'home',
	data: function(){
		return {
		}
	},
	components: {
	}
}
</script>

<style lang="scss">
	@import "@/styles/base/_reset.scss";
	@import "@/styles/base/_common.scss";
	@import "@/styles/base/_layout.scss";
	@import "@/styles/base/_mixins.scss";
	@import "@/styles/base/_vars.scss";
	@import "@/styles/views/_home-index.scss";
</style>

