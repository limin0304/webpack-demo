// 一个常见的 webpack配置文件
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css",
    disable: false
});
var disname = "F:/webpack-demo";
var path = require("path");
console.log(path.resolve(__dirname, disname + "/public"));
var glob = require('glob');
var jsEntry = {
	"base" : disname + "/app/js/base/main.js"
};
//分开打包js
var jsPath = disname + "/app/js/src/**/*.js";
function getJs(){
	glob.sync(jsPath).forEach(function(files){
		console.log(files);
		var name = files.replace(disname + "/app/js/src/","").replace(/.js/,"");
		jsEntry[name] = files;
	})
}
//分开打包html
var htmlPath = disname + "/app/pages/**/*.html";
var plugins = [];
function getHtml(){
	glob.sync(htmlPath).forEach(function(files){
		var name = files.replace(disname + "/app/pages/","").replace(/.html/,"");
		var conf = {
			title: name + '.html',
            template: files,
            filename: disname + '/public/' + name + '.html',
            chunks: ["main",name], //引用的js
            inject: true //script标签所在位置
        }
		plugins.push(new HtmlWebpackPlugin(conf));
	})
}
// 分开打包css
// var cssPath = disname + "/app/**/*.scss";
// function getCss(){
// 	glob.sync(cssPath).forEach(function(files){
// 		var name = files.replace(disname + "/app/","").replace(/.scss/,"");
// 		plugins.push(new ExtractTextPlugin({
// 		    filename: "[name].css",
// 		    disable: false
// 		}));
// 	})
// }
getJs();
getHtml();
// getCss();
plugins.push(extractSass);
console.log(plugins);
console.log(jsEntry);
module.exports = {
	devtool: "source-map",
	entry: jsEntry,  //已多次提及的唯一入口文件
	output: {
		path: path.resolve(__dirname, disname + "/public"), //打包后的文件存放的地方
	//	publicPath: "/",
		filename: "js/[name].js" //打包后输出文件的文件名
	},
	devServer: {
	    contentBase: "./public",//本地服务器所加载的页面所在的目录
	    port: "8888",
	    historyApiFallback: true,//不跳转
	    inline: true//实时刷新
  	},
  	module: {
  		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: { 
					loader: "babel-loader", 
					options: { 
						presets: [ "es2015", "react" ] 
					} 
				}, 
				exclude: /node_modules/
			},
			{
                test: /\.(png)|(jpg)|(gif)$/,
                loader: "url-loader?limit=50000&name=images/[name].[ext]"
            },
			{
          	// 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
	          	test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
	          	loader: 'file-loader?name=fonts/[name].[ext]',
	        },
	        {
	            test: /\.(scss)|(css)$/,
	            use: extractSass.extract({
	                use: [{
	                    loader: "css-loader"
	                }, {
	                    loader: "sass-loader"
	                }],
	                // use style-loader in development 
	                fallback: "style-loader"
	            })
	        }
		] 
	},
	plugins: plugins
	// new webpack.optimize.OccurrenceOrderPlugin(), 
	// new webpack.optimize.UglifyJsPlugin(), 
	// new ExtractTextPlugin("style.css") 
}