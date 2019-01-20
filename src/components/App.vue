<template>
    <div class="app">
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style lang="less" scoped>
    @import (reference) '../less/style';

    .app {
        .flex(column, nowrap, flex-start, center);
        width: 100%;
    }
</style>