<template>
    <div class="app">
        <bootstrap v-if="isLoadingActive" />
        <keep-alive>
            <router-view />
        </keep-alive>
        <sidebar />
    </div>
</template>

<script>
    import Bootstrap from '../components/Bootstrap';
    import Sidebar from '../components/Sidebar';
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'App',
        components: {
            Bootstrap,
            Sidebar,
        },
        computed: {
            ...mapGetters('loading', {
                isLoadingActive: 'isActive',
            }),
        },
        mounted() {
            setInterval(() => this.nextStep(), 1000);
        },
        methods: {
            ...mapActions('loading', {
                stopLoading: 'stop',
                nextStep: 'nextStep',
            }),
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';

    .app {
        .flex(column, nowrap, flex-start, center);
        width: 100%;
    }
</style>