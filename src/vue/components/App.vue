<template>
    <div class="app">
        <locale-changer />
        <loading v-if="isLoadingActive">
            {{ loadingStep.name }}
        </loading>
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
    import { mapGetters } from 'vuex';
    import { loadConfig } from '../commands/config';

    export default {
        name: 'App',
        components: {
            Sidebar,
            Loading,
            LocaleChanger,
        },
        computed: {
            ...mapGetters('loading', {
                isLoadingActive: 'active',
                loadingStep: 'step',
            }),
        },
        created() {
            loadConfig();
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