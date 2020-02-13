import Vue from 'vue'
import Router from 'vue-router'
import Editor from '../components/Editor.vue'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/editor'
  },
  {
    path: '/editor',
    component: Editor
  }
  ]
})

export default router
