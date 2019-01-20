const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    resolve: {
        alias: {
            vue: 'vue/dist/vue.min.js',
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
    optimization: {
        minimizer: [
            new UglifyJsWebpackPlugin({
                sourceMap: false,
                exclude: [/\.min\.js$/gi],
                uglifyOptions: {
                    sourceMap: true,
                    compress: {
                        drop_console: false,
                        conditionals: true,
                        unused: true,
                        comparisons: true,
                        dead_code: true,
                        if_return: true,
                        join_vars: true,
                        warnings: false,
                    },
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
        noEmitOnErrors: true,
        removeAvailableModules: true,
        removeEmptyChunks: true,
        mergeDuplicateChunks: true,
        flagIncludedChunks: true,
        occurrenceOrder: true,
        providedExports: true,
        usedExports: true,
        concatenateModules: true,
        sideEffects: true,
        minimize: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
    ],
});