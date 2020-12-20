const proxy = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		proxy('/', {
			target: 'http://47.95.1.121',
		})
	);
};
