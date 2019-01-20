<template>
    <div>
        <div class="home">
            <div>Launcher (home page)</div>
        </div>
        <sidebar />
    </div>
</template>

<script>
    import Sidebar from '../components/Sidebar';

    export default {
        name: 'Home',
        components: {
            Sidebar,
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../less/style';

    .home {
        width: calc(100% - 240px);
        margin: 0 240px 0 0;
    }
</style>