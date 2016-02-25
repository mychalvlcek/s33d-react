var webpack = require('webpack');

module.exports = {
	entry: [
		'babel-polyfill',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.jsx',
		"./src/theme/index.less"
	],
	module: {
		loaders: [
			{test: /\.jsx?$/, loader: 'react-hot!babel', exclude: /node_modules/},
			{test: /\.json$/, loader: 'json-loader'},
			{
				test: /\.less$/,
				loader: 'style!css!less'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
			{test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	devtool: 'source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
