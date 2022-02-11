const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `src/index.${process.env.NODE_ENV}.html`
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|svg)$/i,
            loader: 'file-loader',
            options: {
                name: '[name]_[contenthash].[ext]'
            }
        }]
    },
    "resolve": {
        mainFiles: ['index']
    }
};
