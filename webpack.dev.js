const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new ReactRefreshWebpackPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
    }
});


/****
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    mode: 'development',
    output: {
        publicPath: '/'
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            localsConvention: "camelCase",
                            modules: {
                                localIdentName: "[local]-[hash:base64:5]"
                            },
                        }
                    },
                    'sass-loader'
                ],
            }, {
                test: /\.(png|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name]_[contenthash].[ext]'
                }
            }
        ]
    },
    "resolve": {
        mainFiles: ['index']
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
    }
};
*/