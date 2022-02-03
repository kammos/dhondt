const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
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
                            modules: true,
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
};
