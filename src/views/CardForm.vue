<template>
	<div class="page-card-form">
		<div class="container-card-form">
			<div class="wrap-form">
				<div class="row-form">
					<input type="text" class="row-input input-card-number" placeholder="Card Number">
				</div>
				<div class="row-form">
					<input type="text" class="row-input input-card-holdername" placeholder="Card Holder Name">
				</div>
				<div class="row-form">
					<input type="text" class="row-input input-mmyy" placeholder="MM/YY">
					<input type="text" class="row-input input-cvv" placeholder="CVV">
				</div>
				<div class="row-form">
					<dropdown-select
						class="row-input dropdown-country"
						:items="options.countries"
						:item="options.country"
						:onChange="setCountry"
						:key="'dropdown-country'"
						placeholder="국적">
					</dropdown-select>
				</div>
				<div class="row-form">
					<input type="text" class="row-input input-zipcode" placeholder="Zip Code">
				</div>
			</div>
		</div>
		<div class="container-btn">
			<div class="btn-next" v-on:click="goOrderForm">Next</div>
		</div>
	</div>
</template>

<script>
import DropdownSelect from '../components/DropdownSelect.vue'
import _ from 'lodash'

export default {
	name: 'card-form',
	mounted: function(){
	},
	methods: {
		setCountry: function(country) {
			this.options.country = country;
		},
		goOrderForm() {
			this.$router.push({name: 'order-form'})
		},
	},
	data: function(){
		return {
			options: {
				country: '',
				countries : [
					{
						id: 1,
						name: 'United Kingdom',
					},
					{
						id: 2,
						name: 'Republic of Korea',
					},
					{
						id: 3,
						name: 'Japan',
					},
				],
			},
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
	@import "@/styles/views/_card-form.scss";
</style>