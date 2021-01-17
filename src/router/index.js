import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: () => import('../views/Reviews.vue')
  },
    {
        path: '/faq',
        name: 'FAQ',
        component: () => import('../views/FAQ.vue')
    },
    {
        path: '/signin',
        name: 'Signin',
        component: () => import('../views/Signin.vue')
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import('../views/Signup.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue'),
        beforeEnter: AuthGuard
    },
    {
        path: '/case/:id',
        name: 'case',
        props: true,
        component: () => import('../components/Case.vue')
    },
    {
        path: '/graffiti',
        name: 'Graffiti',
        props: true,
        component: () => import('../views/Graffiti.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

function AuthGuard(from, to, next) {
    if(Store.getters.isUserAuthenticated)
        next()
    else
        next('/signin')
}
