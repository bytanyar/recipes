const path = require('path');
const webpack = require('webpack');



module.exports = (env) => {
    const config = () => ({
        mode: mode,
        stats: { modules: false },
        resolve: { extensions: ['.js', '.jsx'] },
        output: {
            filename: '[name].js',
            chunkFilename: '[name].[hash].chunk.js',
            publicPath: '/dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    include: /src/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            "plugins": [
                                ["styled-components", { "displayName": false, "preprocess": false }]
                            ].concat(isDevBuild ? [
                                "react-hot-loader/babel"
                            ] : [

                                ])
                        }
                    }
                },

                { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
                { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
                { test: /\.(png|jpg|jpeg|gif)$/, use: 'url-loader?limit=25000' },
            ]
        }
    });
    return config;
}