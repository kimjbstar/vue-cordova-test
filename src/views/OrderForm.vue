<template>
	<div class="page-order-form">
		<div class="container-order-form">
			<div class="wrap-form">
				<div class="row-form">
					<input type="text" class="row-input input-firstname" placeholder="First Name">
					<input type="text" class="row-input input-lastname" placeholder="last Name">
				</div>
				<div class="row-form">
					<input type="text" class="row-input input-street-address" placeholder="street-address">
				</div>
				<div class="row-form">
					<input type="text" class="row-input input-apartment" placeholder="apartment">
				</div>
				<div class="row-form">
					<input type="text" class="row-input input-city" placeholder="city">
				</div>
				<div class="row-form">
					<input type="text" class="row-input input-state-abbreviation" placeholder="state-abbreviation">
				</div>
				<div class="row-form">
					<input type="text" class="row-input input-zipcode" placeholder="zipcode">
				</div>
				<div class="row-form">
					<input type="text" class="row-input input-cell-phone" placeholder="cell-phone">
				</div>
			</div>
		</div>
		<div class="container-btn">
			<div class="btn-next" v-on:click="submit">Place Order</div>
		</div>
	</div>
</template>

<script>
import DropdownSelect from '../components/DropdownSelect.vue'
import _ from 'lodash'

export default {
	name: 'order-form',
	mounted: function(){
	},
	methods: {
		submit () {
			this.$router.push({name: 'order-done-index'})
		}
	},
	data: function(){
		return {
			options: {
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
	@import "@/styles/views/_order-form.scss";
</style>