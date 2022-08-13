import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import * as ElIconModules from '@element-plus/icons'
import * as echarts from 'echarts'

import zhCn from 'element-plus/es/locale/lang/zh-cn'

import './assets/global.css'


const app = createApp(App)
// vue3 给原型上挂载属性

app.config.globalProperties.$echarts = echarts  //绑定实例

app.use(store).use(router).use(ElementPlus, { locale: zhCn, size: 'normal' }).mount('#app');

// 统一注册Icon图标
for (const iconName in ElIconModules) {
    if (Reflect.has(ElIconModules, iconName)) {
        const item = ElIconModules[iconName]
        app.component(iconName, item)
    }
}

