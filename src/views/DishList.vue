<template>
	<div class="page-dish-list">
		<div class="container-dishes">
		<div class="wrap-dish">
			<div class="thumbnail"></div>
			<div class="price">$8.00</div>
			<div class="name">Pancakes</div>
			<div class="time">30-45 MIN</div>
		</div>
		<div class="wrap-dish">
			<div class="thumbnail"></div>
			<div class="price">$8.00</div>
			<div class="name">Pancakes</div>
			<div class="time">30-45 MIN</div>
		</div>
		<div class="wrap-dish">
			<div class="thumbnail"></div>
			<div class="price">$8.00</div>
			<div class="name">Pancakes</div>
			<div class="time">30-45 MIN</div>
		</div>
		<div class="wrap-dish">
			<div class="thumbnail"></div>
			<div class="price">$8.00</div>
			<div class="name">Pancakes</div>
			<div class="time">30-45 MIN</div>
		</div>
		<div class="wrap-dish">
			<div class="thumbnail"></div>
			<div class="price">$8.00</div>
			<div class="name">Pancakes</div>
			<div class="time">30-45 MIN</div>
		</div>
		<div class="wrap-dish">
			<div class="thumbnail"></div>
			<div class="price">$8.00</div>
			<div class="name">Pancakes</div>
			<div class="time">30-45 MIN</div>
		</div>
	</div>
	</div>
</template>

<script>
export default {
	name: 'dish-list',
	props: ['params'],
	mounted: function(){
	},
	methods: {
	},
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
	@import "@/styles/views/_dish-list.scss";
</style>