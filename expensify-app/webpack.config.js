// entry point for the webpack 
    // output file 
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//import path from 'path';

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
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
                }, {
                    test:/\.s?css$/,
                    use: [MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ],
                }]
            },
            plugins: [
                new MiniCssExtractPlugin({ 
                    filename: 'styles.css'
                })
            ],
            // makes the source code be the original source code
            devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map', 
            devServer: {
                static: path.join(__dirname, 'public'),
                historyApiFallback: true
            }
    }
}

// run babel to render JSX

