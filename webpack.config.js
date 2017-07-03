var path = require('path');
var webpack = require("webpack");
const isVendorModule = (module) => {
    // returns true for everything in node_modules
    return module.context &&
        (module.context.indexOf('node_modules') !== -1 ||
            module.context.indexOf('semantic') !== -1 ||
            module.rawRequest.indexOf('.png') !== -1 ||
            module.rawRequest.indexOf('.scss') !== -1 ||
            module.rawRequest.indexOf('.less') !== -1 ||
            module.rawRequest.indexOf('.svg') !== -1
        );
}


module.exports = {
    entry:
        {
            index: './src/index.js',
            demo: './src/demo.js',
            documentation: './src/documentation.js',
            tableMultiplication: './src/multiplicationTable/tableMultiplication.js'
        },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    //devtool: 'source-map',
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        // Seperate vendor code into a seperate file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: isVendorModule
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: ['vendor.bundle.js', 'projectRessource.bundle.js']
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.es2015.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
}