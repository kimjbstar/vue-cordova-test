<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<transition name="slide-fade">
			<router-view></router-view>
		</transition>
<!-- 		<div class="gel-view">
			<gel-title-bar title="gelato project !!"/>
			<div>
				<router-link to="/">root</router-link>
				<router-link to="/foo">Go to Foo</router-link>
				<router-link to="/bar2">Go to Bar</router-link>
				<router-view></router-view>
			</div>
			<gel-tabs :tabs="tabs" :foo="'bar'"></gel-tabs>
		</div> -->
	</div>
</template>



<style lang="scss">
	@import './styles/base/_common.scss';
</style>

