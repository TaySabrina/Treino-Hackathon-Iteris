import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import FavoriteAnimals from '../views/FavoriteAnimals'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/favoritos',
    name: 'FavoriteAnimals',
    component: FavoriteAnimals
  },
]

const router = new VueRouter({
  routes
})

export default router
