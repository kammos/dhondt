
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        publicPath: '/'
    },
    plugins: [
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
    }
};