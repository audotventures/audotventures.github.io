// webpack.config.js
module.exports = {
    module: {
        rules: [
        {
            test: /\.mdx?$/,
            use: [
            'babel-loader',
            '@mdx-js/loader',
            ],
        },
        ],
    },
  // Other configurations...
}
