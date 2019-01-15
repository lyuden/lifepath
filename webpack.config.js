var path = require('path');
const webpack = require('webpack');
module.exports = {

    entry: {

        bundle:"./main.js",

    },
  /*  plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],*/
    module:{
        loaders:[{
            loader:'babel',

            test: /\.js$/,
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react']
            }
        },
            { test: /\.css$/,
                loader: "style-loader!css-loader" }


        ]
    },
    output: {
        path: path.resolve(__dirname, 'static/'),
        filename: "lifepath.js"
    },
    devtool: 'cheap-module-source-map',

    devServer:{
        contentBase: 'static'
    },
};