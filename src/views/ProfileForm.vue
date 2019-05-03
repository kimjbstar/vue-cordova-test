<template>
	<div class="page-profile-form">
		#profile-form
		<div>
			<div class="btn-upload" v-on:click="chooseFile()">업로드</div>
			<div v-on:click="submit()"></div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'profile-form',
	props: [],
	mounted: function(){
	},
	methods: {
		chooseFile (){
			var inputId = Math.random().toString(36).substring(2)
			var newInput = document.createElement("input");
			newInput.type = "file";
			newInput.id = inputId;
			document.addEventListener('change',function(e){
				if(e.target && e.target.id== inputId ){
					// console.log('e', e);
					// console.log('e.target', e.target);
					var file = e.target.files[0];
					if ( file == undefined ) {
						return;
					}
					var formData = new FormData();
					formData.append('userfile', file);

					axios.post('localhost:11000',{
						data: formData,
						config: { headers: {'Content-Type': 'multipart/form-data' }}
					}).then( response => {
						console.log('response', response)
					}).catch( error => {
						console.log('failed', error)
					})
				}
			});
			document.body.appendChild(newInput);
			newInput.click()
		}
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
	@import "@/styles/views/_profile-form.scss";
</style>