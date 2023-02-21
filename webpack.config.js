const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const { Build } = require('./src/utils/build.utils');

const { htmlWebpackTemplateConfig, components } = Build.prototype.generateHtmlWebpackTemplateConfig();

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.css', '.scss'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
        compress: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Data Structures (Playground)',
            template: './src/index.html',
            filename: 'index.html',
            components,
        }),
        new CopyWebpackPlugin({
            patterns: [ { from: 'src/assets', to: 'images' } ]
        }),
   ].concat(htmlWebpackTemplateConfig),
};
