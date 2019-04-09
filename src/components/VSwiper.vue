<template>
<div class="swiper-container">
	<div class="swiper-wrapper">
		<div class="swiper-slide" style="background-color:red">Slide 1</div>
		<div class="swiper-slide" style="background-color:blue">Slide 2</div>
		<div class="swiper-slide" style="background-color:green">Slide 3</div>
	</div>
	<div class="swiper-pagination"></div>
	<div class="swiper-button-prev"></div>
	<div class="swiper-button-next"></div>
	<div class="swiper-scrollbar"></div>
</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css'

export default {
	name: 'VSwiper',
	props: [ 'items', 'onChange' ],
	data: function() {
		return {
			swiper: {},
		}
	},
	computed: {

	},
	mounted: function(){
		this.swiper = new Swiper('.swiper-container', {
			centeredSlides:true,
			pagination: '.swiper-pagination',
			paginationType:'bullets',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	},
	methods: {
		toggleOpen: function(){
			this.isOpened = !this.isOpened;
		},
		selectItem: function(item){
			this.selectedItem = item;
		}
	}
}
</script>

<style lang="scss">
	@import "../styles/components/dropdown-select.scss";
	.swiper-slide {
		height: 200px;
	}
</style>
