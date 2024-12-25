import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Projects from '../views/ProjectsPage.vue';
import Contact from '../views/ContactPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;