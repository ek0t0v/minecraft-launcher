<template>
    <div class="app">
        <keep-alive>
            <router-view />
        </keep-alive>
        <sidebar />
    </div>
</template>

<script>
    import Sidebar from '../components/Sidebar';

    export default {
        name: 'App',
        components: {
            Sidebar,
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../less/style';

    .app {
        .flex(column, nowrap, flex-start, center);
        width: 100%;
    }
</style>