const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                },
                exclude: /node_modules/,
            },
        ],
    },
    // Директория для бандла
    output: {
        filename: '[name].js', // Динамическое имя бандла. Каждое имя в entry будет использовано вместо name
        path: path.resolve(__dirname, 'dist'),
    },
    // Массив экземпляров плагинов
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    optimization: {
        minimize: true,
        moduleIds: 'deterministic',
        innerGraph: true,
        concatenateModules: true,
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', // Или development
};
