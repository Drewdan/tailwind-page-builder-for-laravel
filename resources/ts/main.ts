import { createApp} from "vue";
import './style.css'
import PageBuilder from './PageBuilder.vue'
import Pages from './Pages.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Main from "./Main.vue";

const routes = [
    { path: '/page-builder/', component: Pages },
    { path: '/page-builder/pages/:id', component: PageBuilder }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(Main).use(router).mount('#app');
