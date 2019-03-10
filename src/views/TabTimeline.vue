<template>
<div class="tab-timeline" style="height: calc(100vh - 88px)">
	<div class="posts">
		{{ posts }}
	</div>
	<router-view></router-view>
</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				posts: [],
			}
		},
		mounted() {
			const url = 'http://f9dev.kr/posts.json';
			axios
				.get(url)
				.then((response) => {
					if ( response.data.result != 1 ) {
						alert('fuck');
						return;
					}
					this.posts = response.data.posts;
				})
		}
	}
</script>