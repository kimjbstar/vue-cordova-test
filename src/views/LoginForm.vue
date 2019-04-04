<template>
	<div class="page-login-form">
		<div class="container-login">
			<div class="icon-logo"></div>
			<v-form v-model="valid" class="form-login">
				<input type="text" class="name" v-model="user.name" placeholder="Name">
				<input type="text" class="password" v-model="user.password" placeholder="Password">
			<div class="find-password">forget password ?</div>
			<div class="btn-submit" v-on:click="submit()">SIGN IN</div>
			</v-form>
			-------OR------
			<div class="sns-icons">
				<div class="icon-sns"></div>
				<div class="icon-sns"></div>
				<div class="icon-sns"></div>
			</div>
			<div class="row-join">
				<div class="text-minor">Not a user yet? </div>
				<div class="btn-join">Sign up</div>
			</div>

		</div>
	</div>

</template>

<script>
	export default {
		data : function(){
			return {
				user: {
					email: '',
					password: '',
				}
			}
		},
		methods : {
			submit: function(){

			}
		}
	}
</script>

<style lang="scss">
	@import "@/styles/base/_reset.scss";
	@import "@/styles/base/_common.scss";
	@import "@/styles/base/_layout.scss";
	@import "@/styles/base/_mixins.scss";
	@import "@/styles/base/_vars.scss";
	@import "@/styles/views/_login-form.scss";
</style>
