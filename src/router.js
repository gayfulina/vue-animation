
import { createRouter, createWebHistory } from 'vue-router';
import AllUsers from '@/pages/AllUsers';
import CourseGoals from '@/pages/CourseGoals';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: AllUsers},
    {path: '/goals', component: CourseGoals}
  ]
})

export default router;
