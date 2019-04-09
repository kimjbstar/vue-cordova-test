<template>
	<v-container fluid id="v-container">
	<v-layout
		column
		align-space-between
	>
		<div class="timeline" id="v">
			<div class="posts">
				<v-card v-for="post in posts" :key="post.id" class="post" style="margin-bottom:10px">
					<v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
					<v-card-title primary-title>{{ post.title }}</v-card-title>
					<v-card-text>{{ post.content }}</v-card-text>
					<v-card-actions>
						<v-btn flat color="orange">Share</v-btn>
						<v-btn flat color="orange">Explore</v-btn>
					</v-card-actions>
				</v-card >
			</div>
		</div>
	</v-layout>
</v-container>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				posts: [],
			}
		},
		methods: {
			getMore: function() {
				// 따로 제공되는거 없음, 이거로 진행
				// https://codepen.io/mednabouli/pen/EdKzzL
			},
			getList () {
				const url = 'http://f9dev.kr/posts.json?num=5';
				axios
					.get(url)
					.then((response) => {
						if ( response.data.result != 1 ) {
							alert('fuck');
							return;
						}
						this.posts = response.data.posts;
					})
			},
		},
		mounted() {
			this.getList();
		}
	}
</script>

{
	"id": "259",
	"user_id": "1",
	"title": "",
	"content": "",
	"rep_img_url": "",
	"status": "10",
	"hits_cnt": "0",
	"likes_cnt": "0",
	"created_at": "1530775691",
	"priority": "1530775691"
}