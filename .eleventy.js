const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/assets/css/");
	eleventyConfig.addPassthroughCopy({ "./src/**/*.css": "/assets/css" });
	eleventyConfig.addPassthroughCopy("./src/assets/img/");
	eleventyConfig.addPassthroughCopy("./src/assets/js/");

	eleventyConfig.addWatchTarget("./src/macros/**/*.css");
	eleventyConfig.addWatchTarget("./src/assets/js/");

	eleventyConfig.addFilter("postDate", function (dateObj) {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});
	eleventyConfig.addFilter("log", function (value) {
		return console.log(value);
	});
	eleventyConfig.addFilter("toString", function (value) {
		return value.toLocaleString();
	});

	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};
