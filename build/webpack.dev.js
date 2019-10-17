const merge = require('webpack-merge');
const common = require('./webpack.common');
module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		open: true,
		hot: true,
		host: '0.0.0.0',
		port: 9527,
		useLocalIp: true,
		compress: true
	}
});