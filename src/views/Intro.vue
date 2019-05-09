<template>
	<div class="page-intro">
		#intro
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'intro',
	methods: {
	},
	data: function(){
		return {
		}
	},
	components: {
	},
	mounted () {
		console.log('jwt', localStorage['jwt-token']);
		if ( localStorage['jwt-token'] ) {
			// api-token-verify
			// if true, set current user and go home index
			// if false, go to login page

			console.log('this.user', this.user);
			var user = _.cloneDeep(this.user)
			var MAIN_HOST = 'http://local.homekitchen.com';
			var url = MAIN_HOST + '/api/api-token-verify/';
			axios.post(url, {
				token : localStorage['jwt-token'],
			}, {
				config: {
					headers: {
						'Content-Type': 'application/json',
					},
				},
				withCredentials: true,
			}).then( response => {
				console.log('response', response)
				this.router.push('home-index')
			}).catch( error => {
				alert('이미지 서버 업로드에 실패하였습니다.');
			})


		} else {
			this.$router.push('login-index');
			// localStorage.setItem('colorSetting', '#a4509b');
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
	@import "@/styles/views/_intro.scss";
</style>