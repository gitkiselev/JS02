/*module.exports = {
	entry: './js/bundle/script.js',
	output: {
		filename: 'bundle.js'
	}
};//это работает, но закидывает в папку dist по-умолчанию*/
let path = require('path');//npm install path --save-dev
let config = {
	entry: './js/bundle/script.js',
	output: {
		path: path.resolve(__dirname, './js/bundle'),
		filename: 'bundle.js'
	}
}

module.exports = config;