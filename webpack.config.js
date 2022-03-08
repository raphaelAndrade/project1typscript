const HtmlWebpackPluing = require('html-webpack-plugin')
module.exports = {
    plugins: [
        new HtmlWebpackPluing({
            template: './src/index.html',
            filename: 'index.html',
        })
    ],
}