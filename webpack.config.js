const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./src/js/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		static: "./dist",
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /\/js\/node_modules\//,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/html/index.html",
		}),
	],
	resolve: {
		modules: [
			path.resolve(__dirname, "src", "js", "node_modules"),
			"node_modules",
		],
	},
};
