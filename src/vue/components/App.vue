<template>
    <div class="app">
        <the-locale-changer />
        <the-loading v-if="isLoadingActive">
            {{ loadingStep.name }}
        </the-loading>
        <keep-alive>
            <router-view />
        </keep-alive>
        <the-sidebar />
    </div>
</template>

<script>
    import TheSidebar from './TheSidebar';
    import TheLocaleChanger from './TheLocaleChanger';
    import TheLoading from './TheLoading';
    import { mapGetters } from 'vuex';
    import { loadConfig } from '../commands/config';

    export default {
        name: 'App',
        components: {
            TheSidebar,
            TheLoading,
            TheLocaleChanger,
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