<template>
	<div class="page-dish-list">
		<div class="container-filters">
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
		<!-- <div v-on:click="test">test</div> -->
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
import DropdownSelect from '../components/DropdownSelect.vue'
import _ from 'lodash'

export default {
	name: 'dish-list',
	mounted: function(){
		var query = this.$route.query;
		this.options.location = _.find(this.options.locations, (o) => (o.id == query.location_id));
		this.options.price = _.find(this.options.prices, (o) => (o.id == query.price_id));
		this.options.time = _.find(this.options.times, (o) => (o.id == query.time_id));

		// console.log('this.options', this.options);
	},
	methods: {
		setLocation: function(location) {
			this.options.location = location;
		},
		setPrice: function(price) {
			this.options.price = price;
		},
		setTime: function(time) {
			// this.$set(this.options, 'time', time);
			this.options.time = time;
		},
	},
	data: function(){
		return {
			options: {
				location: '',
				price: '',
				time: '',
				category_id: '',
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