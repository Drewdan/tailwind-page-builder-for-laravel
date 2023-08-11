import { createApp} from "vue";
import './style.css'
import PageBuilder from './PageBuilder.vue'
import Pages from './Pages.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Main from "./Main.vue";
import ErrorPage from "./ErrorPage.vue";

const routes = [
    { path: '/page-builder/pages', component: Pages },
    { path: '/page-builder/pages/:slug', component: PageBuilder },
    { path: '/page-builder/error/:code', component: ErrorPage, name: 'error' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(Main).use(router).mount('#app');
