// entry point for the webpack 
    // output file 
const path = require('path');
//import path from 'path';
// run babel to render JSX

module.exports = {
    mode:'development',
    entry: './src/app.js',
    output: {
        path:path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module : {
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    // makes the source code be the original source code
    devtool: 'eval-cheap-module-source-map', 
    devServer: {
        static: path.join(__dirname, 'public')
    }
};