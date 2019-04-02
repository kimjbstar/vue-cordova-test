<template>
	<div class="page-login-index">
		<div class="container-login">
			<div class="icon-logo"></div>
			<!-- <v-form v-model="valid"> -->
			<div class="btn-login" v-on:click="goRouter('login-form')">SIGN IN</div>
			<div class="btn-join" v-on:click="goRouter('join-form')">SIGN UP</div>
			<!-- <v-form> -->
		</div>
	</div>

</template>

<script>
	export default {
		data : function(){
			return {
			}
		},
		methods : {
			goRouter: function(routerName){
				this.$router.push(routerName)
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
	@import "@/styles/views/_login-index.scss";
</style>
