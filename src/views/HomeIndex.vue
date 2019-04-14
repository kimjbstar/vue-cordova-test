<template>
	<div class="page-home-index">
		<div class="container-filters">
			<div class="row-search">
				<div class="btn-filter"></div>
				<div class="wrap-search">
					<input type="text" placeholder="search for dish">
					<div class="icon-search"></div>
				</div>

			</div>
			<div class="row-filter">
				<dropdown-select
				:items="options.locations"
				placeholder="위치"
				:onChange="setLocation"
				></dropdown-select>
				<dropdown-select
				:items="options.prices"
				:onChange="setPrice"
				placeholder="가격"></dropdown-select>
				<dropdown-select
				:items="options.times"
				:onChange="setTime"
				placeholder="시간"></dropdown-select>
			</div>

		</div>
		<div class="section-dishes">
			<div class="row-best">
				<div class="text-best">Today's best Deal</div>
				<div class="show-all">SHOW ALL</div>
			</div>

			<swiper class="swiper-dishes">
				<swiper-slide class="wrap-dish" >
					<div class="thumbnail" v-on:click="goDishDetail"></div>
					<div class="row-info">
						<div class="col-title">
							<div class="text-title">Mint Salad</div>
							<div class="row-time">
								<div class="icon-time"></div>
								<div class="text-time">30-45 MIN</div>
							</div>
						</div>
						<div class="price">$13.00</div>
					</div>
				</swiper-slide>
				<swiper-slide class="wrap-dish">
					<div class="thumbnail"></div>
					<div class="row-info">
						<div class="col-title">
							<div class="text-title">Mint Salad</div>
							<div class="row-time">
								<div class="icon-time"></div>
								<div class="text-time">30-45 MIN</div>
							</div>
						</div>
						<div class="price">$13.00</div>
					</div>
				</swiper-slide>
				<swiper-slide class="wrap-dish">
					<div class="thumbnail"></div>
					<div class="row-info">
						<div class="col-title">
							<div class="text-title">Mint Salad</div>
							<div class="row-time">
								<div class="icon-time"></div>
								<div class="text-time">30-45 MIN</div>
							</div>
						</div>
						<div class="price">$13.00</div>
					</div>
				</swiper-slide>
			</swiper>

		</div>
		<div class="container-categories">
			<div class="text-title">
				Choose By Category
			</div>
			<div class="wrap-categories">
				<div class="wrap-category"
				v-bind:key="category.id"
				v-for="category in categories">
					<div class="wrap-icon" :class="'category'+category.id"></div>
					<div class="name">{{category.name}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DropdownSelect from '../components/DropdownSelect.vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {
	name: 'home',
	methods: {
		setLocation: function(location) {
			this.params.location = location.name;
		},
		setPrice: function(price) {
			this.params.price = price.name;
		},
		setTime: function(time) {
			this.params.time = time.name;
		},
		goDishDetail: function(){
			this.$router.push({ name: 'dish-detail', params: { dishId: 1 }});
		},
	},
	data: function(){
		return {
			params: {
				location: '',
				price: '',
				time: '',
				category_id: '',
			},
			options: {
				locations : [
					{
						id: 1,
						name: '서울',
					},
					{
						id: 2,
						name: '대전',
					},
					{
						id: 3,
						name: '대구',
					},
					{
						id: 4,
						name: '부산',
					},
				],
				prices: [
					{
						id: 1,
						name: '~ 1000',
					},
					{
						id: 2,
						name: '1000 ~ 10000',
					},
					{
						id: 3,
						name: '10000 ~ 20000',
					},
				],
				times: [
					{
						id: 1,
						name: '~ 10',
					},
					{
						id: 2,
						name: '10 ~ 20',
					},
					{
						id: 3,
						name: '20 ~ 30',
					},
				],
			},
			categories: [
				{
					id: 1,
					name:'Breakfast',
				},
				{
					id: 2,
					name:'Lunch',
				},
				{
					id: 3,
					name:'Dinner',
				},
				{
					id: 4,
					name:'Pizza',
				},
				{
					id: 5,
					name:'Fruits',
				},
				{
					id: 6,
					name:'Vegetables',
				},
				{
					id: 7,
					name:'Protein',
				},
				{
					id: 8,
					name:'More',
				},
			]
		}
	},
	components: {
		DropdownSelect,
		swiper,
		swiperSlide
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