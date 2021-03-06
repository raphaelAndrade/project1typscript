const HtmlWebpackPluing = require('html-webpack-plugin')
module.exports = {
    entry: "./src/index.tsx",
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
        },
    {
        test: /\.svg$/,
        loader: '@svgr/webpack',
    }
    ]
    },
    plugins: [
        new HtmlWebpackPluing({
            template: './src/index.html',
            filename: 'index.html',
        })
    ],
}