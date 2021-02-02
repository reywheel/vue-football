module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    proxy: process.env.VUE_APP_BASE_URL
  }
};
