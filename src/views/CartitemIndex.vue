<template>
	<div class="page-cartitem-index">
		<div class="container-cartitems">
			<div class="wrap-cartitem">
				<div class="col-thumbnail">
					<div class="thumbnail"></div>
				</div>
				<div class="col-info">
					<div class="text-title">Feta Salad</div>
					<div class="amount-price">1X$12.00</div>
					<div class="row-price">
						<div class="row-edit-amount">
							<div class="btn-minus">-</div>
							<div class="amount">2</div>
							<div class="btn-plus">+</div>
						</div>
						<div class="text-price">$24.00</div>
					</div>
				</div>
			</div>
			<div class="wrap-cartitem">
				<div class="col-thumbnail">
					<div class="thumbnail"></div>
				</div>
				<div class="col-info">
					<div class="text-title">Feta Salad</div>
					<div class="amount-price">1X$12.00</div>
					<div class="row-price">
						<div class="row-edit-amount">
							<div class="btn-minus">-</div>
							<div class="amount">2</div>
							<div class="btn-plus">+</div>
						</div>
						<div class="text-price">$24.00</div>
					</div>
				</div>
			</div>
			<div class="wrap-cartitem">
				<div class="col-thumbnail">
					<div class="thumbnail"></div>
				</div>
				<div class="col-info">
					<div class="text-title">Feta Salad</div>
					<div class="amount-price">1X$12.00</div>
					<div class="row-price">
						<div class="row-edit-amount">
							<div class="btn-minus">-</div>
							<div class="amount">2</div>
							<div class="btn-plus">+</div>
						</div>
						<div class="text-price">$24.00</div>
					</div>
				</div>
			</div>
			<div class="wrap-cartitem">
				<div class="col-thumbnail">
					<div class="thumbnail"></div>
				</div>
				<div class="col-info">
					<div class="text-title">Feta Salad</div>
					<div class="amount-price">1X$12.00</div>
					<div class="row-price">
						<div class="row-edit-amount">
							<div class="btn-minus">-</div>
							<div class="amount">2</div>
							<div class="btn-plus">+</div>
						</div>
						<div class="text-price">$24.00</div>
					</div>
				</div>
			</div>
			<div class="wrap-cartitem">
				<div class="col-thumbnail">
					<div class="thumbnail"></div>
				</div>
				<div class="col-info">
					<div class="text-title">Feta Salad</div>
					<div class="amount-price">1X$12.00</div>
					<div class="row-price">
						<div class="row-edit-amount">
							<div class="btn-minus">-</div>
							<div class="amount">2</div>
							<div class="btn-plus">+</div>
						</div>
						<div class="text-price">$24.00</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container-price">
			<div class="row-title">Your Orders</div>
			<div class="row-price">
				<div class="name">Bill Total</div>
				<div class="value">$35.00</div>
			</div>
			<div class="row-delivery-price">
				<div class="name">Delivery Charge</div>
				<div class="value">$1.99</div>
			</div>
			<div class="row-total-price">
				<div class="name">Grand Total</div>
				<div class="value">$36.99</div>
			</div>
			<div class="row-btn">
				<div class="btn-submit" v-on:click="submit">Proceed to Pay</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'cartitem-index',
	props: [],
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
	@import "@/styles/views/_cartitem-index.scss";
</style>