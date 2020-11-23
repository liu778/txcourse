const { resolve } = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const commonCssLoader = [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
        loader:'postcss-loader',
        options:{
            plugins:function () {
                return [autoprefixer('last 5 versions')];
            }
        }
    }
]

module.exports = {
    mode:'production',
    devtool:'source-map',
    optimization:{
        minimize:false
    },
    entry:{
        index:resolve(__dirname,'./src/js/index.js'),
        list:resolve(__dirname,'./src/js/list.js')
    },
    output:{
        path:resolve(__dirname,'dist'),
        filename:'js/[name].js',
    },
    module:{
        rules:[
            /* {
                test:/\.js$/,
                exclude:/node_modules/,
                enforce:'pre',
                loader:'eslint-loader',
                options:{
                    fix:true
                    }
               
            }, */
            {
                oneOf:[
                    {
                        test:/\.css$/,
                        use:[...commonCssLoader]
                    },
                    {
                        test:/\.scss$/,
                        use:[...commonCssLoader,'sass-loader']
                    },
                    {
                        test:/\.tpl$/,
                        loader:'ejs-loader',
                        options:{
                            esModule:false
                        }
                    },
                    {
                        test:/\.(png|jpg|jpeg|gif|ico)$/i,
                        use:[
                            {
                                loader:'url-loader',
                                options:{
                                    limit:1024,
                                    name:'[hash:10].[ext]',
                                    outputPath:'image'
                                }
                            },
                            'image-webpack-loader'
                        ]
                    },
                    {
                        test:/\.(woff2?|eot|svg|ttf|oft)(\?.*)?$/i,
                        loader:'url-loader',
                        options:{
                            name:'[name].[ext]',
                            outputPath:'fonts'
                        }
                    },
                    /* {
                        test:/\.html$/,
                        loader:'html-loader'
                    }, */
                    {
                        test:/\.js$/,
                        exclude:/node_modules/,
                        loader:'babel-loader',
                        options:{
                            presets:[
                                [
                                 "@babel/preset-env",
                                  {
                                     useBuiltIns:'usage',
                                     corejs:{
                                         version:3
                                     },
                                     targets:{
                                         chrome:'60',
                                         firefox:'60',
                                         ie:"9",
                                         safari:"10",
                                         edge:'17'
                                     }
                                  }
                                ]
                            ],
                            "plugins": [
                                [
                                    "@babel/plugin-proposal-decorators",
                                    {
                                        "legacy": true
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        exclude:/\.(js|css|html|jpg|png|gif|scss)/,
                        loader:'file-loader',
                        /* query */options:{
                            outputPath:'public'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new OptimizeCssAssetsWebpackPlugin(),
        new UglifyjsWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:resolve(__dirname,'./src/index.html'),
            title:'腾讯课堂首页',
            chunks:['index'],
            //多模块排序  manual按照数组顺序
            chunksSortMode:'manual',
            excludeChunks:['node_modules'],
            hash:true, 
            minify:{
                collapseWhitespace:true,
                removeComments:true
            }
        }),
        new HtmlWebpackPlugin({
            filename:'list.html',
            template:resolve(__dirname,'./src/list.html'),
            title:'腾讯课堂列表页',
            chunks:['list'],
            //多模块排序  manual按照数组顺序
            chunksSortMode:'manual',
            excludeChunks:['node_modules'],
            hash:true, 
            minify:{
                collapseWhitespace:true,
                removeComments:true
            }
        })
    ],
    devServer:{
        watchOptions:{
            ignored:/node_modules/
        },
        contentBase:resolve(__dirname,'dist'),
        compress:true,
        port:8000,
        open:true,
        hot:true
    }
}