import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import TestVueView from '@/views/TestVueView.vue'
import NoteView from '@/views/NoteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/testing',
      name: 'test vue view',
      component: TestVueView
    },
    {
      path: '/notes',
      name: 'notes overview',
      component: NoteView
    },
    {
      path: '/:patchMatch(.*)*',
      name: 'not found page',
      component: NotFoundView
    },
  ],
})

export default router
