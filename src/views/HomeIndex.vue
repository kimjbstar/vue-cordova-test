<template>
	<div class="page-home-index">
		<div class="container-filters">
			<div class="row-search">
				<div class="btn-filter"></div>
				<input type="text" class="search" placeholder="search for food">
			</div>
			<div class="row-filter">
				<!-- select directive 필요 -->
				<input type="text" class="location">
				<input type="text" class="price">
				<input type="text" class="time">
			</div>

		</div>
		<div class="section-foods">
			<div class="row-best">
				<div class="text-best">Today's best Deal</div>
				<div class="show-all">SHOW ALL</div>
			</div>

			<div class="swiper"></div>
		</div>
		<div class="container-categories">
			<div class="text-title">
				Choose By Category
			</div>
			<div class="wrap-categories">
				<div class="wrap-category">
					<div class="icon"></div>
					<div class="name">1</div>
				</div>
				<div class="wrap-category">
					<div class="icon"></div>
					<div class="name">1</div>
				</div>
				<div class="wrap-category">
					<div class="icon"></div>
					<div class="name">1</div>
				</div>
				<div class="wrap-category">
					<div class="icon"></div>
					<div class="name">1</div>
				</div>
				<div class="wrap-category">
					<div class="icon"></div>
					<div class="name">1</div>
				</div>
				<div class="wrap-category">
					<div class="icon"></div>
					<div class="name">1</div>
				</div>
				<div class="wrap-category">
					<div class="icon"></div>
					<div class="name">1</div>
				</div>
				<div class="wrap-category">
					<div class="icon"></div>
					<div class="name">1</div>
				</div>

			</div>
		</div>
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