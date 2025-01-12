import { createRouter, createWebHistory } from 'vue-router'
import { useQuizStore } from '../stores/quiz'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: () => import('../views/Quiz.vue')
    },
    {
      path: '/result',
      name: 'Result',
      component: () => import('../views/Result.vue'),
      beforeEnter: (to, from, next) => {
        const quizStore = useQuizStore()
        if (!quizStore.result) {
          next({ name: 'Home' })
        } else {
          next()
        }
      }
    }
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // 如果是刷新页面，检查本地存储
  if (from.name === undefined && to.name === 'Result') {
    const quizStore = useQuizStore()
    if (!quizStore.result) {
      next({ name: 'Home' })
      return
    }
  }
  next()
})

export default router 