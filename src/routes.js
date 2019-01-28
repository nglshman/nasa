import library from './components/library.vue';
import nasa from './components/nasa.vue';
import apod from './components/apod.vue';

export default [
    {path: '/library', component: library},
    {path: '/', component: nasa},
    {path: '/apod', component: apod}
]
