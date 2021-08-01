const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = {
  css: {
    // modules:false,
    // extract:true,
    publicPath: './',
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 16,
            propList: ['*'],
            // selectorBlackList: ['van-']
          })
        ]
      }
    }
  }
}