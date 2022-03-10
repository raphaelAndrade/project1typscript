const HtmlWebpackPluing = require('html-webpack-plugin')
module.exports = {
    entry: "./src/index.ts",
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
        }]
    },
    plugins: [
        new HtmlWebpackPluing({
            template: './src/index.html',
            filename: 'index.html',
        })
    ],
}