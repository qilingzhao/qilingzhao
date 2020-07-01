const navConf = require("./nav")
module.exports = {
  title: 'qilingzhao\'s blog',
  description: 'Just do IT',
  plugins: {
    "vuepress-plugin-auto-sidebar":{
      nav: true
    }
  },
  themeConfig: {
    nav: navConf
  }
}
