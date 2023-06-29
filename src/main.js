import { createApp } from 'vue';
import { createPinia } from 'pinia';
import plugin0629 from './plugin/plugin-0629';


import App from './App.vue';
import router from './router';

import './assets/variables.scss';
import './assets/style.scss';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin0629, {
  greetings: {
    // 可直接更改 hello 的值
    hello: "Bonjour!"
  }
})

app.mount('#app')
