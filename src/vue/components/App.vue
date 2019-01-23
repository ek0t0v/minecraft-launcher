<template>
    <div class="app">
        <locale-changer />
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
    import LocaleChanger from './LocaleChanger';
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'App',
        components: {
            Sidebar,
            Loading,
            LocaleChanger,
        },
        computed: {
            ...mapGetters('loading', {
                isLoadingActive: 'isActive',
            }),
        },
        mounted() {
            setInterval(() => this.nextStep(), 100);
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