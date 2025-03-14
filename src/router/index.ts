import { createRouter, createWebHistory } from 'vue-router';
import CategoriesView from '../views/CategoriesView.vue';
import BanksView from '../views/BanksView.vue';

const routes = [
  {
    path: '/',
    name: 'Categories',
    component: CategoriesView,
  },
  {
    path: '/banks',
    name: 'Banks',
    component: BanksView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
