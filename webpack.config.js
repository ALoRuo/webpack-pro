const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname+'/src/index.js',
    output:{
        path: __dirname+'/build',
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot:true
    },
    module: {
        rules:[
            {
                test:/(\.js|\.jsx)$/,
                use:[
                    {
                        loader:"babel-loader",
                    }
                ],
                exclude: /node-modules/
            },
            {
                test:/\.css$/,
                use:["style-loader",{
                    loader:'css-loader',
                    options:{
                        modules:{
                            // modules:true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }

                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname+"/src/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ]
}