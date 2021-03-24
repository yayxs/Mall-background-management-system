module.exports = {
  // 因为每种 CSS 文件类型都有多个规则，
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/styles/variables.scss"'
      }
    }
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {

    } else {}
  },
  chainWebpack (config) {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        // 修改 Loader 选项
        return options
      })
    // 进行性能优化的部分,通过.tap 修改选项，起到一定的优化作用
    // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])
    // 正是由于空闲时间提前获取用户未来可能访问的内容，所以移除这个插件
    config.plugins.delete('prefetch')
    // 图片的引入，通过file-loader 然后使用url-loader 减少http 的请求的数量
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(ops => Object.assign(ops, { limit: 10240 }))
  }
}
