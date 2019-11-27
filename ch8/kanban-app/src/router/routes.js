import KbnBordView from '@/components/templates/KbnBordView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskDetailView from '@/components/templates/KbnTaskDetailView.vue'

export default [{
  path: '/',
  component: KbnBordView,
  meta: {requiresAuth: true}
}, {
  path: '/login',
  components: KbnLoginView,
  meta: {requiresAuth: false}
}, {
  path: 'tasks/:id',
  components: KbnTaskDetailView,
  meta: {requiresAuth: true}
}, {
  path: '*',
  redirect: '/'
}]
