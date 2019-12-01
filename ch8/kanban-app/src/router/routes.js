import KbnBordView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskDetailView from '@/components/templates/KbnTaskDetailModal.vue'

export default [{
  path: '/',
  component: KbnBordView,
  meta: {requiresAuth: true}
}, {
  path: '/login',
  component: KbnLoginView,
  meta: {requiresAuth: false}
}, {
  path: 'tasks/:id',
  component: KbnTaskDetailView,
  meta: {requiresAuth: true}
}, {
  path: '*',
  redirect: '/'
}]
