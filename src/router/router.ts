import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/MainPage.vue';
import PostPage from '../pages/PostPage.vue';
import About from '../pages/About.vue';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/post',
    component: PostPage,
  },
  {
    path: '/about',
    component: About,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
