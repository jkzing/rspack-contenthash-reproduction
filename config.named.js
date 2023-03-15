const path = require('path');

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	mode: 'production',
	context: __dirname,
	entry: {
		main: "./src/main.js"
	},
	output: {
		path: path.join(__dirname, 'dist', process.env.B || 'rspack', 'named'),
		filename: '[name].[contenthash:8].js'
	},
	optimization: {
		moduleIds: 'named'
	}
};
