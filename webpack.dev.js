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
    },
    module: {
        rules: [{
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
        }]
    }
});
