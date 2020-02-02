import Home from '../pages/Home.vue'

export default [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: route => ({ query: route.query })
    }
]