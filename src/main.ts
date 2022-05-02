import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import 'windi.css'

const Home = { template: '<div>Home</div>' }


const routes = [
  {
    path: '/',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})



createApp(App)
  .use(router)
  .mount('#app')
