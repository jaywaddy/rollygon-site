const timeToRead = require('eleventy-plugin-time-to-read');
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/assets/css/");
	eleventyConfig.addPassthroughCopy({ "./src/_includes/**/*.css": "/assets/css" });
	eleventyConfig.addPassthroughCopy("./src/assets/img/");
	eleventyConfig.addPassthroughCopy("./src/assets/js/");

	eleventyConfig.addWatchTarget("./src/_includes/macros/**/*.css");
	eleventyConfig.addWatchTarget("./src/_includes/macros/menu/menu.css");
	eleventyConfig.addWatchTarget("./src/assets/js/");

	eleventyConfig.addPlugin(timeToRead, {
		speed: "248 characters per minute",
		style: "short"
	});

	eleventyConfig.addShortcode("year", function () {
		return `${new Date().getFullYear()}`
	});

	eleventyConfig.addFilter("includes", function (value, array) {
		return array.includes(value);
	});
	eleventyConfig.addFilter("postDate", function (dateObj) {
		return DateTime.fromJSDate(dateObj, { zone: "UTC+0", locale: "en" }).toFormat("MMM d, yyyy");
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
