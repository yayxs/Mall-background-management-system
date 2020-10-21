module.exports = {
  chainWebpack(config) {
    // 进行性能优化的部分,通过.tap 修改选项，起到一定的优化作用
    // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
    config.plugin("preload").tap(() => [
      {
        rel: "preload",
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: "initial",
      },
    ]);
    // 正是由于空闲时间提前获取用户未来可能访问的内容，所以移除这个插件
    config.plugins.delete("prefetch");
  },
};
