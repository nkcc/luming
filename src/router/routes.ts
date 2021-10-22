import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'spot', component: () => import('pages/Spot.vue') },
      { path: 'contact', component: () => import('pages/Contact.vue') },
      { path: 'case', component: () => import('pages/Case.vue') },
      { path: 'study-abroad', component: () => import('pages/StudyAbroad.vue')},
      { path: 'incubation', component: () => import('pages/IncubationProgram.vue')},
      { path: 'study-abroad', component: () => import('pages/StudyAbroad.vue')},
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
