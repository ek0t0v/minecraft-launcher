<template>
    <div class="app">
        <loading v-if="isLoadingActive" />
        <keep-alive>
            <router-view />
        </keep-alive>
        <sidebar />
    </div>
</template>

<script>
    import Sidebar from './Sidebar';
    import Loading from './Loading';
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'App',
        components: {
            Sidebar,
            Loading,
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