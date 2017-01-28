var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        app: './app.js'
    },
    output: {
        path: 'output/',
        filename: '[name].js'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx', '.less']
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query:{presets:['react', 'es2015']} },
            { test: /\.css$/, loader: 'style!css'},
            { test: /\.less$/, loader: 'style!css!less'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    ],
    externals: {
    }
};
