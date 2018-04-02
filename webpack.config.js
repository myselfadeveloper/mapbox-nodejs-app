const BrowserSyncPlugin = require('browser-sync-webpack-plugin'); 
const path = require('path');

module.exports = {
    entry: {
        app: './webcontent/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'webcontent/build'),
        filename: 'app.bundle.js'
    },
    devServer: {
        contentBase: './webcontent'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    },
    watch: true,
    plugins: [
        new BrowserSyncPlugin ({
            injectChanges: true,
            host: 'localhost',
            port: 3000,
            files: ['./webcontent/*'],
            server: { baseDir: ['webcontent']},
            //proxy: 'http://localhost:3000'
        })
    ]
};