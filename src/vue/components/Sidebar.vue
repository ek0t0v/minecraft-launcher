<template>
    <div class="sidebar">
        <div class="sidebar-menu">
            <router-link
                class="sidebar-menu__button"
                to="accounts"
            >
                <i class="sidebar-menu__icon fas fa-users" />
            </router-link>
            <router-link
                class="sidebar-menu__button"
                to="settings"
            >
                <i class="sidebar-menu__icon fas fa-cog" />
            </router-link>
            <router-link
                class="sidebar-menu__button"
                to="about"
            >
                <i class="sidebar-menu__icon fas fa-info" />
            </router-link>
        </div>
        <div class="sidebar-play">
            <app-input
                class="sidebar-play__element"
                :placeholder="$t('play.nickname.placeholder')"
            />
            <app-select
                class="sidebar-play__element"
                :choices="versions"
                :current="currentVersion"
                :appears-from="'bottom'"
                :placeholder="$t('play.version.placeholder')"
                :is-loading="isVersionsLoading"
                :is-disabled="isVersionsEmpty"
                @on-select="onSelect"
            />
            <app-button
                class="sidebar-play__element"
                @on-click="play"
            >
                {{ $t('play.button') }}
            </app-button>
        </div>
    </div>
</template>

<script>
    import AppButton from '../components/AppButton';
    import AppInput from '../components/AppInput';
    import AppSelect from '../components/AppSelect';
    import { loadVersions } from '../commands/version';
    import { startGame } from '../commands/game';
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'Sidebar',
        components: {
            AppButton,
            AppInput,
            AppSelect,
        },
        data() {
            return {
                currentVersion: {},
            };
        },
        computed: {
            ...mapGetters('version', {
                isVersionsLoading: 'isVersionsLoading',
                isVersionsEmpty: 'isVersionsEmpty',
                versions: 'items',
            }),
        },
        created() {
            this.startVersionsLoading();
            loadVersions();
        },
        methods: {
            ...mapActions('version', {
                startVersionsLoading: 'startLoading',
            }),
            play() {
                startGame();
            },
            onSelect(item) {
                this.currentVersion = item;
            },
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';

    .sidebar {
        .flex(column, nowrap, space-between, flex-start);
        width: 280px;
        height: 100vh;
        padding: 24px;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        right: 0;
        background-color: #E8F7F4;
    }

    .sidebar-menu {

        .flex(row, nowrap, flex-end, flex-start);
        width: 100%;

        &__button {

            .flex(row, nowrap, center, center);
            width: 40px;
            height: 40px;
            margin: 0 4px 0 0;
            border-radius: 20px;
            transition: .1s background-color ease-in-out;

            &:hover {
                background-color: rgba(0,0,0,.05);
            }

            &:last-child {
                margin: 0;
            }

        }

        &__icon {
            font-size: 16px;
            color: #555;
        }

    }

    .sidebar-play {

        width: 100%;

        &__element {

            margin: 0 0 12px 0;

            &:last-child {
                margin: 0;
            }

        }
    }
</style>