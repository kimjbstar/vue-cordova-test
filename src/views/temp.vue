<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>


// App. vue
<script>
	// import GelTitleBar from './components/GelTitleBar.vue';
	// import GelTabs from './components/GelTabs.vue';

	// export default {
	// 	name: 'app',
	// 	components: {
	// 		GelTitleBar,
	// 		GelTabs,
	// 	},
	// 	data() {
	// 		return {
	// 			tabs: [
	// 				{
	// 					name: 'tab1',
	// 				},
	// 				{
	// 					name: 'tab2',
	// 				},
	// 				{
	// 					name: 'tab3',
	// 				},
	// 				{
	// 					name: 'tab4',
	// 				},
	// 			]
	// 		}
	// 	}
	// }
</script>


module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
};

const path = require("path");

module.exports = {
  // 라우터 추가 후 동작 안됨
  // pluginOptions: {
  //   "style-resources-loader": {
  //     preProcessor: "scss",
  //     patterns: [path.resolve(__dirname, "./src/styles/base/*.scss")]
  //   }
  // }