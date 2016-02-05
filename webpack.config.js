module.exports = {
	devtool: 'eval-source-map',
	entry: {
		main: [
			'./src/main.js'
		]
	},
	output: {
		filename: './public/[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: { presets: ['es2015','react', 'stage-0'] }
			}
		]
	}
}