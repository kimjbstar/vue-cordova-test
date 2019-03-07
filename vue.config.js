const path = require("path");

module.exports = {
	css: {
		loaderOptions: {
			// pass options to sass-loader
			sass: {
				data: `
				@import "@/styles/base/_common.scss";
				`
			},
		}
	}
}