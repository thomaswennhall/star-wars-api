module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/_colors.scss";`,
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/star-wars-characters/'
  : '/'

}
