// vue.config.js
module.exports = {
  transpileDependencies: [], // 必须是一个数组
  // 配置静态资源处理
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        // 增大图片转换为base64的限制到50KB
        options.limit = 50000;
        return options;
      });
  },
  // 配置开发服务器
  devServer: {
    hot: true,
    open: true
  },
  publicPath: '/',
  outputDir: 'dist'
}