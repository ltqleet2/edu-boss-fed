import Vue from 'vue'
import App from './App.vue'

// 自动找目录下的index.js
import router from './router'
import store from './store'

// 引⼊ element 组件库
import ElementUI from 'element-ui'
// 引⼊ element 主题⽂件
// import 'element-ui/lib/theme-chalk/index.css'
// 引入自定义的全局样式文件   主题自定义后，引入自己自定义的样式文件。由于自定义的样式文件中引入了element原生提供的主题样式文件。所以这里就不必再次引入了。
import './styles/index.scss'

// 注册为 Vue 插件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
