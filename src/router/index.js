import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index.vue'
import Home from '../pages/Home.vue'
import Media from '../pages/Media.vue'
import Status from '../pages/Status.vue'
import Group from '../pages/Group.vue'
import Profile from '../pages/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/media',
          name: 'media',
          component: Media
        },
        {
          path: '/status',
          name: 'status',
          component: Status
        },
        {
          path: '/group',
          name: 'group',
          component: Group
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile
        }
      ]
    }
  ]
})
