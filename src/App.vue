<template>
    <div>
        <app-nav></app-nav>
        <router-view></router-view>
    </div>
</template>

<script>
import library from './components/library.vue';
import apod from './components/apod.vue';
import nasa from './components/nasa.vue';
import navigation from './components/navigation.vue';


export default {
    components: {
        'apod': apod,
        'nasa': nasa,
        'library': library,
        'app-nav': navigation
    },
    data () {
        return {

        }
    }
}
</script>

<style>
::-webkit-scrollbar {
    width: 0px;
}
body{
    background-color: #1a1e29;
}
</style>
