const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        publicPath: '/dhondt/',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            exportLocalsConvention: "camelCase",
                            localIdentName: "[hash:base64:5]",
                            mode: "local"
                        },
                    }
                },
                'sass-loader'
            ],
        }]
    },
});
