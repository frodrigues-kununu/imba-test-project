const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.imba$/,
				loader: 'imba/loader',
			}
		]
	},
	resolve: {
		extensions: [".imba",".js", ".json"]
	},
	entry: "./src/client.imba",
	output: {  path: __dirname + '/dist', filename: "client.js" },
	devServer: {
		contentBase: [path.join(__dirname, '/dist')]
	}
}