<template>
	<div class="page-home-index">
		<div class="container-filters">
			<div class="row-search">
				<div class="btn-filter"></div>
				<div class="wrap-search">
					<input type="text" placeholder="search for food">
					<div class="icon-search"></div>
				</div>

			</div>
			<div class="row-filter">
				<!-- select directive 필요 -->
				<div class="select-location"></div>
				<div class="select-price"></div>
				<div class="select-time"></div>
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
				<div class="wrap-category" v-for="category in categories">
					<div class="wrap-icon" :class="'category'+category.id"></div>
					<div class="name">{{category.name}}</div>
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
			options: {
				locations : [
					{
						id: 1,
						name: '서울',
					},
					{
						id: 2,
						name: '인천',
					},
					{
						id: 3,
						name: '대구',
					},
				],
				prices: [ '1000 ~ 10000', '10000 ~ 20000', '20000 ~'],
				time: ['~10', '10 ~ 20', '20 ~ 30', '30 ~'],
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