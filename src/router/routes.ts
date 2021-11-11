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
            { path: 'case/:id', component: () => import('pages/Case.vue') },
            { path: 'case', component: () => import('pages/Case.vue') },
            { path: 'study-abroad', component: () => import('pages/StudyAbroad.vue') },
            { path: 'incubation/:id', component: () => import('pages/IncubationProgram.vue') },
            { path: 'incubation', component: () => import('pages/IncubationProgram.vue') },
            { path: 'famous-school-car', component: () => import('pages/CloudProgram.vue') },
            { path: 'ladder', component: () => import('pages/LadderProgram.vue') },
            { path: 'academic/:id', component: () => import('pages/AcademicManager.vue'), props: true },
            { path: 'academic', component: () => import('pages/AcademicManager.vue'), props: true },
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
