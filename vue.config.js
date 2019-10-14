module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '//st.retailo2o.com/lsgc/' : '/',
  assetsDir: 'marketing',
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') {
      config.devServer = {
        disableHostCheck: true
      }
    }
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        data: `@import "@/assets/scss/mixin.scss";`,
      },
    },
  },  
  productionSourceMap: false,
}