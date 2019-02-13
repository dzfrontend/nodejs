module.exports = {
    devServer: {
        // 代理转发，请求http://localhost:8080/api路径的会转发到http://localhost:8090端口
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8090',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}