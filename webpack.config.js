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
                            modules: true,
                        }
                    },
                    'sass-loader'
                ],
            }
        ]
    },
    "resolve": {
        "alias": {
            "react": "preact/compat",
            "react-dom": "preact/compat",
        },
        mainFiles: ['index']
    },
    "plugins": [
        new webpack.ProvidePlugin({
            'h': ['preact', 'h'],
            'Fragment': ['preact', 'Fragment'],
        })
    ]
};
