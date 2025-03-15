import { createRouter, createWebHistory } from '@ionic/vue-router';
import CategoriesView from '../views/CategoriesView.vue';
import BanksView from '../views/BanksView.vue';
import type { RouteRecordRaw } from 'vue-router';
import Workplace from '../views/Workplace.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/categories'
  },
  {
    path: '/',
    component: Workplace,
    children: [
      {
        path: '',
        redirect: '/categories'
      },
      {
        path: '/categories',
        name: 'Categories',
        component: CategoriesView,
      },
      {
        path: '/banks',
        name: 'Banks',
        component: BanksView,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
