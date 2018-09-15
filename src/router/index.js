import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import regedit from '../components/regedit'
import main from '../components/main'
import sysList from '../components/sysList'
import come from '../components/sys/come'
import sale from '../components/sys/sale'
import store from '../components/sys/store'
import add from '../components/sys/add'
import purchasing from '../components/sys/purchasing'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/regedit',
      name: 'regedit',
      component: regedit
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children:[
        {
          path:'/main/purchasing',
          name:'purchasing',
          component:purchasing,
          children:[
            {
              path:'/main/purchasing/come',
              name:'come',
              component:come
            }
          ]
        },
        {
          path:'/main/sale',
          name:'sale',
          component:sale
        },{
          path:'/main/store',
          name:'store',
          component:store
        },
        {
          path:'/main/add',
          name:'add',
          component:add
        },
      ]
    },
    {
      path:'/sysList',
      name:'sysList',
      component:sysList
    },

    {
      path: '/',
      name: 'login',
      component: login
    },
    
  ],
  // mode:history
})
