<template>
	<div class="page-home-index">
		<div class="container-filters">
			<div class="row-search">
				<div class="btn-filter"></div>
				<div class="wrap-search">
					<form v-on:submit.prevent="onSubmit">
						<input type="text" v-model="options.keyword" placeholder="search for dish">
						<div class="icon-search"></div>
					</form>
				</div>
			</div>
			<div class="row-filters">
				<dropdown-select
					class="dropdown-location"
					:items="options.locations"
					:item="options.location"
					placeholder="위치"
					:onChange="setLocation"
					:key="'dropdown-location'"
				></dropdown-select>
				<dropdown-select
					class="dropdown-price"
					:items="options.prices"
					:item="options.price"
					:onChange="setPrice"
					:key="'dropdown-price'"
					placeholder="가격">
				</dropdown-select>
				<dropdown-select
					class="dropdown-time"
					:items="options.times"
					:item="options.time"
					:onChange="setTime"
					:key="'dropdown-time'"
					placeholder="시간">
				</dropdown-select>
			</div>

		</div>
		<div class="section-dishes">
			<div class="row-best">
				<div class="text-best">Today's best Deals</div>
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
			this.options.location = location;
		},
		setPrice: function(price) {
			this.options.price = price;
		},
		setTime: function(time) {
			this.options.time = time;
		},
		goDishDetail: function(){
			this.$router.push({ name: 'dish-detail', params: { dishId: 1 }});
		},
		onSubmit: function(){
			var params = {
				location_id : this.options.location.id,
				price_id : this.options.price.id,
				time_id : this.options.time.id,
			}
			this.$router.push({
				name: 'dish-list',
				query: params,
			});
		}
	},
	data: function(){
		return {
			options: {
				location: '',
				price: '',
				time: '',
				category_id: '',
				keyword: '',
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
			],
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