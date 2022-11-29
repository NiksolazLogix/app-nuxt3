import Router from 'vue-router'
import Home from './pages/index.vue'
import Composition from './pages/composition.vue'
import Option from './pages/option.vue'

const routes = [
    { path: '/', name:'home', component: Home },
    { path: '/composition', name:'composition', component: Composition },
    { path: '/option', name:'option', component: Option },
  ]

  const router = routes

  export default router

