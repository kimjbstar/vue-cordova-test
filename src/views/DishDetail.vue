<template>
	<div class="page-dish-detail">
		<div class="container-swiper">
			<swiper class="swiper-dishes">
				<swiper-slide class="wrap-dish" >
					dd
				</swiper-slide>
				<swiper-slide class="wrap-dish" >
					ff
				</swiper-slide>
			</swiper>
		</div>
		<div class="container-info">
			<div class="row-title">Black Olive and Mint Salad</div>
			<div class="row-time">30-40 MIN + Delivery Time</div>
			<div class="row-weight">
				<div class="text-weight">350g</div>
				<div class="text-info">Vegetables</div>
			</div>
			<div class="row-chef">
				Chef
				<span class="name">Erina Islam</span>
			</div>
		</div>
		<div class="container-ingredient">
			<div class="row-heading">
				<div class="heading">Ingredients</div>
				<div class="btn-toggle"></div>
			</div>
			<div class="row-item">
				<div class="icon"></div>
				<div class="col-title">
					<div class="text-title">Lemon</div>
					<div class="price">$0.12</div>
				</div>
				<div class="row-plusminus">
					<div class="btn-minus">-</div>
					<div class="text-value">2</div>
					<div class="btn-plus">+</div>
				</div>
			</div>
			<div class="row-btns">
				<div class="btn-order">
					Order Now
				</div>
				<div class="btn-cart">
					Add to Cart
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	name: 'dish-detail',
	methods: {
	},
	data: function(){
		return {
		}
	},
	components: {
		swiper,
		swiperSlide,
	}
}
</script>

<style lang="scss">
	@import "@/styles/base/_reset.scss";
	@import "@/styles/base/_common.scss";
	@import "@/styles/base/_layout.scss";
	@import "@/styles/base/_mixins.scss";
	@import "@/styles/base/_vars.scss";
	@import "@/styles/views/_dish-detail.scss";
</style>