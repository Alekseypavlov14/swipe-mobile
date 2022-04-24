const path = require('path')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'umd',
        clean: true
    },
    mode: 'production',
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
}