<template>
	<div class="page-login-form">
		<div class="container-login">
			<div class="icon-logo"></div>
			<v-form  class="form-login">
				<input type="text" class="name" v-model="user.email" placeholder="email">
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
import axios from 'axios'
export default {
	data : function(){
		return {
			user: {
				email: '',
				password: '',
			}
		}
	},
	methods: {
		submit: function(){
			console.log('this.user', this.user);
			var user = _.cloneDeep(this.user)
			var MAIN_HOST = 'http://local.homekitchen.com';
			var url = MAIN_HOST + '/api/api-token-auth/';
			axios.post(url, user, {
				// config: {
				// 	headers: {
				// 		'Content-Type': 'multipart/form-data',
				// 	},
				// },
				withCredentials: true,
			}).then( response => {
				console.log('response', response)

				localStorage.setItem('jwt-token', response.data.token)
				this.router.push('home-index')
			}).catch( error => {
				alert('이미지 서버 업로드에 실패하였습니다.');
			})
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
