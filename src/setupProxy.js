const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/api', createProxyMiddleware({
        target: 'http://api.bluehat.games',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }));
}