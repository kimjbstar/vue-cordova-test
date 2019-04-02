<template>
	<div class="page-join-form">
		<div class="container-login">
			<div class="icon-logo"></div>
				{{ user }}
				{{ options }}
				<v-form v-model="valid" class="form-join">
					<input type="text" class="name" v-model="user.name" placeholder="Name">
					<input type="text" class="email" v-model="user.email" placeholder="Email Address">
					<input type="text" class="password" v-model="options.password" placeholder="Password">
					<input type="text" class="password-confirm" v-model="options.passwordConfirm" placeholder="Password Confirm">
					<div class="row-desc">
						<span class="text-desc">Want to be a Chef?</span>
						<span class="text-submit" v-on:click="submit()">Sign up</span>
					</div>
					<div class="btn-submit" v-on:click="submit()">SIGN UP</div>
				</v-form>
		</div>
	</div>

</template>

<script>
 	export default {
		data : function(){
			return {
				valid: false,
				options: {
					password: '',
					passwordConfirm: '',
				},
				user: {
					name: '',
					email: '',
					password: '',
				},
				rules: {
					email: [
						v => !!v || 'E-mail is required',
						v => /.+@.+/.test(v) || 'E-mail must be valid'
					],
					password: [
						v => !!v || 'Password is required',
						v => v.length <= 10 || 'Password must be less than 10 characters'
					],
				}
			}
		},
		methods : {
			submit: function(){
				alert(1);
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
	@import "@/styles/views/_join-form.scss";
</style>
