const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV == 'development';
const {VueLoaderPlugin} = require('vue-loader');
const config = {
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,'dist')
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:"webpack测试"
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.png|jpg|gif$/i,
                use:'file-loader'
            }
        ]
    },
    mode:"development"
}
if(isDev){
    config.devServer ={
        host:'localhost',
        port:8080,
        overlay:{
            errors:true
        },
        hot:true
    }
}
module.exports = config