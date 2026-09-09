import eslintPluginAstro from "eslint-plugin-astro";

export default [
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			quotes: ["warn", "double"],
		},
	},
];
