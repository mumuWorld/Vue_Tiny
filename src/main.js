import { createApp } from 'vue'
import App from './App.vue'
//挂载事务总线为全局属性
import Bus from './plugin/MyBus';//事务总线

const app = createApp(App)

app.config.globalProperties.$bus = Bus;

app.mount('#app')
// createApp(App).mount('#app')

