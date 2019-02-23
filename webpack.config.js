var openBrowser = require("open-browser-webpack-plugin");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: __dirname + "/src/app.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"]
	},
	module: {
		// -loaders:[
		rules: [
			// json数据转化为js对象
			// {
			// 	test:/\.json$/,
			// 	use:"json-loader"
			// },
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader"
			}, {
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			}, {
				test: /\.(png|jpg|gif|jpeg)$/,
				use: "url-loader?limit=2048" // 小于2M的图片，进行base64编码
			}, {
				test: /\.less$/,
				use: [
					"style-loader",
					"css-loader",
					"less-loader"
				]
			}
		]
	},
	plugins: [
		// 自动打开浏览器
		new openBrowser({
			url: "http://localhost:8080"
		}),
		new htmlWebpackPlugin({
			template: __dirname + "/index.tmpl.html"
		})
	],
	// 服务器代理配置
	devServer: {
		historyApiFallback: true,
		inline: true,
		contentBase: './dist',
		port: 8082,
		proxy: {
			'/baidu_music_api': {
				target: 'http://tingapi.ting.baidu.com',
				pathRewrite: {
					'^/baidu_music_api': '/v1/restserver/ting'
				},
				changeOrigin: true
			}
		}
	}
}