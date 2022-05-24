const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      // 给每个sass样式代码前都传入公共代码。即省得每个scss中都要导入变量文件。
      sass: {
        additionalData: '@import "@/styles/variables.scss"'
      },
      scss: {
        // 注意末尾分号
        additionalData: '@import "~@/styles/variables.scss";'
      }
    }
  }
})
