<template>
  <div class="about">
	<router-link to="/about/sub3">sub3</router-link>
	<router-link to="/about/sub4">sub4</router-link>
	<br>
	<h1>This is an about page</h1>
	<br>
	params.id :  {{ $route.params.id }}
	<router-view></router-view>
  </div>
</template>
