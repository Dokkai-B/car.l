import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Portfolio from '@/components/Portfolio.vue';
import Contacts from '@/components/Contacts.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;  