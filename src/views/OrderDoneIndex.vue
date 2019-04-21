<template>
	<div class="page-order-done-index">
		<div class="container-icon">
			<div class="icon-done"></div>
			<div class="text-done">Order Placed!</div>
		</div>
		<div class="container-btn">
			<div class="btn-next" v-on:click="goHome">Back to Home</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'order-done-index',
	mounted: function(){
	},
	methods: {
		goHome (){
			this.$router.push({name: 'home-index'});
		}
	},
	data: function(){
		return {
			options: {
			},
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
	@import "@/styles/views/_order-done-index.scss";
</style>