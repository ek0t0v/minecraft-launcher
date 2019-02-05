<template>
    <div class="sidebar">
        <div class="sidebar-menu">
            <router-link
                class="sidebar-menu__button"
                to="users"
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
            <app-select
                class="sidebar-play__element"
                :current="config.lastUser"
                :appears-from="'bottom'"
                :placeholder="$t('play.nickname.placeholder')"
                :is-disabled="isUsersEmpty"
                :max-height="200"
            >
                <app-select-option
                    v-for="(user, index) in users"
                    :key="index"
                    @click.native="selectUser(user)"
                >
                    {{ user.username }}
                </app-select-option>
            </app-select>
            <app-select
                class="sidebar-play__element"
                :current="config.lastVersion"
                :appears-from="'bottom'"
                :placeholder="$t('play.version.placeholder')"
                :is-loading="isVersionsLoading"
                :is-disabled="isVersionsEmpty"
                :max-height="200"
            >
                <version-select-option
                    v-for="version in versions"
                    :key="version.id"
                    :is-installed="version.isInstalled"
                    @click.native="selectVersion(version)"
                >
                    {{ version.name }}
                </version-select-option>
            </app-select>
            <app-button
                class="sidebar-play__element"
                :is-disabled="isVersionsEmpty || !config.lastVersion"
                @on-click="play"
            >
                {{ playButtonText }}
            </app-button>
        </div>
    </div>
</template>

<script>
    import AppButton from './App/AppButton';
    import AppInput from './App/AppInput';
    import AppSelect from './App/AppSelect';
    import { loadVersions } from '../commands/version';
    import { launch } from '../commands/game';
    import { mapGetters, mapActions } from 'vuex';
    import VersionSelectOption from './VersionSelectOption';
    import AppSelectOption from './App/AppSelectOption';

    export default {
        name: 'TheSidebar',
        components: {
            AppSelectOption,
            VersionSelectOption,
            AppButton,
            AppInput,
            AppSelect,
        },
        computed: {
            ...mapGetters('config', {
                config: 'config',
            }),
            ...mapGetters('version', {
                isVersionsLoading: 'isVersionsLoading',
                isVersionsEmpty: 'isVersionsEmpty',
                versions: 'items',
            }),
            ...mapGetters('user', {
                isUsersEmpty: 'isUsersEmpty',
                users: 'items',
            }),
            playButtonText() {
                if (!this.config.lastVersion || this.config.lastVersion.isInstalled) {
                    return this.$t('play.button.play');
                }

                return this.$t('play.button.install');
            },
        },
        created() {
            this.showVersionsLoading();
            loadVersions();
        },
        methods: {
            ...mapActions('config', {
                setLastVersion: 'setLastVersion',
                setLastUser: 'setLastUser',
            }),
            ...mapActions('version', {
                showVersionsLoading: 'startLoading',
            }),
            play() {
                launch(this.config.lastVersion.id);
            },
            selectVersion(version) {
                this.setLastVersion({
                    version,
                });
            },
            selectUser(user) {
                this.setLastUser({
                    user,
                });
            },
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';

    .sidebar {
        .flex(column, nowrap, space-between, flex-start);
        width: 100%;
        height: 100%;
        padding: 24px;
        box-sizing: border-box;
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