import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CaseView from '../views/CaseView.vue';
import ProfileView from '../views/ProfileView.vue';
import InventoryView from '../views/InventoryView.vue';
import ContractsView from '../views/ContractsView.vue';
import AdminView from '../views/AdminView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/case/:id',
      name: 'case',
      component: CaseView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: InventoryView,
    },
    {
      path: '/contracts',
      name: 'contracts',
      component: ContractsView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
    }
  ],
});

export default router;
