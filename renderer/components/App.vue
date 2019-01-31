<template>
    <div class="app">
        <the-window-header />
        <the-locale-changer />
        <div
            class="app__loading"
            :class="{ 'app__loading--bottom': config.loadingPosition === 'bottom' }"
        >
            <the-loading />
        </div>
        <div
            class="app__view"
            :class="{
                'app__view--is-loading-active': isLoadingActive,
                'app__view--is-loading-at-the-bottom': config.loadingPosition === 'bottom',
            }"
        >
            <keep-alive>
                <router-view
                    class="app-view"
                    :class="{ 'app-view--right': config.sidebarPosition === 'left' }"
                />
            </keep-alive>
            <the-sidebar
                class="app-sidebar"
                :class="{ 'app-sidebar--left': config.sidebarPosition === 'left' }"
            />
        </div>
    </div>
</template>

<script>
    import TheLoading from './TheLoading';
    import TheSidebar from './TheSidebar';
    import TheLocaleChanger from './TheLocaleChanger';
    import TheWindowHeader from './TheWindowHeader';
    import { mapGetters } from 'vuex';
    import { loadConfig } from '../commands/config';

    export default {
        name: 'App',
        components: {
            TheSidebar,
            TheLoading,
            TheLocaleChanger,
            TheWindowHeader,
        },
        computed: {
            ...mapGetters('loading', {
                isLoadingActive: 'isActive',
            }),
            ...mapGetters('config', {
                config: 'config',
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

        .flex(column, nowrap, flex-start, flex-start);
        width: 100%;
        height: 100vh;
        position: relative;

        &__loading {

            width: 100%;
            height: @classic__loading__height;
            position: absolute;
            top: @classic__window-header__height;

            &--bottom {
                top: unset;
                bottom: 0;
            }

        }

        &__view {

            .flex(column, nowrap, flex-start, center);
            width: 100%;
            height: calc(100vh - @classic__window-header__height);
            background-color: #fff;
            position: fixed;
            top: @classic__window-header__height;
            z-index: 2;
            transition:
                .1s height ease-in-out,
                .1s margin ease-in-out;

            &--is-loading-active {
                height: calc(100vh - @classic__window-header__height - @classic__loading__height);
                margin-top: @classic__loading__height;
            }

            &--is-loading-at-the-bottom {
                margin-top: unset;
                margin-bottom: @classic__loading__height;
            }
        }

    }

    .app-sidebar {

        width: @classic__sidebar__width;
        position: absolute;
        right: 0;

        &--left {
            right: unset;
            left: 0;
        }

    }

    .app-view {

        width: calc(100% - @classic__sidebar__width);
        position: absolute;
        left: 0;
        overflow-y: auto;

        &--right {
            left: @classic__sidebar__width;
        }

    }
</style>