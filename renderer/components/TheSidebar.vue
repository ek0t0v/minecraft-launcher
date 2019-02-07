<template>
    <div class="sidebar">

        <!-- menu -->
        <div
            class="sidebar-menu"
            :class="{ 'sidebar-menu--left': config.sidebarPosition === 'left' }"
        >

            <!-- menu > home -->
            <router-link
                class="sidebar-menu__button"
                to="home"
            >
                <i class="sidebar-menu__icon fas fa-home" />
            </router-link>

            <!-- menu > settings -->
            <router-link
                class="sidebar-menu__button"
                to="settings"
            >
                <i class="sidebar-menu__icon fas fa-cog" />
            </router-link>

            <!-- menu > info -->
            <router-link
                class="sidebar-menu__button"
                to="about"
            >
                <i class="sidebar-menu__icon fas fa-info" />
            </router-link>

        </div>

        <!-- play -->
        <div class="sidebar-play">

            <!-- play > user -->
            <app-select
                class="sidebar-play__element"
                :current="lastUserUsername"
                :appears-from="'bottom'"
                :placeholder="$t('play.username.placeholder')"
                :max-height="200"
            >
                <app-select-option
                    v-for="(user, index) in config.users"
                    :key="index"
                    @click.native="selectUser(user)"
                >
                    {{ user.username }}
                </app-select-option>
                <app-select-option-delimiter v-if="!isUsersEmpty" />
                <app-select-action-option
                    :css-icon-class="'fas fa-plus'"
                    @click.native="openCreateUserModal"
                >
                    {{ $t('play.username.action.createUser') }}
                </app-select-action-option>
                <app-select-action-option
                    :css-icon-class="'fas fa-user-cog'"
                    @click.native="goToUsersPage"
                >
                    {{ $t('play.username.action.manageUsers') }}
                </app-select-action-option>
            </app-select>

            <!-- play > version -->
            <app-select
                class="sidebar-play__element"
                :current="lastVersionName"
                :appears-from="'bottom'"
                :placeholder="$t('play.version.placeholder')"
                :is-loading="isVersionsLoading"
                :is-disabled="isVersionsEmpty"
                :max-height="200"
            >
                <version-select-option
                    v-for="version in config.versions"
                    :key="version.id"
                    :is-installed="version.isInstalled"
                    @click.native="selectVersion(version)"
                >
                    {{ version.name }}
                </version-select-option>
            </app-select>

            <!-- play > play button -->
            <app-button
                class="sidebar-play__element"
                :is-disabled="isVersionsEmpty || !config.lastVersion || !config.lastUser"
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
    import AppSelectActionOption from './App/AppSelectActionOption';
    import CreateUserForm from './CreateUserForm';
    import AppSelectOptionDelimiter from './App/AppSelectOptionDelimiter';

    export default {
        name: 'TheSidebar',
        components: {
            AppSelectOptionDelimiter,
            AppSelectOption,
            VersionSelectOption,
            AppSelectActionOption,
            AppButton,
            AppInput,
            AppSelect,
        },
        computed: {
            ...mapGetters('config', {
                config: 'config',
                isVersionsEmpty: 'isVersionsEmpty',
                isUsersEmpty: 'isUsersEmpty',
                isVersionsLoading: 'isVersionsLoading',
            }),
            lastVersionName() {
                return this.config.lastVersion ? this.config.lastVersion.name : null
            },
            lastUserUsername() {
                return this.config.lastUser ? this.config.lastUser.username : null
            },
            playButtonText() {
                if (!this.config.lastVersion || this.config.lastVersion.isInstalled) {
                    return this.$t('play.button.play');
                }

                return this.$t('play.button.install');
            },
        },
        created() {
            this.startVersionsLoading();
            loadVersions();
        },
        methods: {
            ...mapActions('config', {
                setLastVersion: 'setLastVersion',
                setLastUser: 'setLastUser',
                startVersionsLoading: 'startVersionsLoading',
            }),
            play() {
                launch(this.config.lastVersion.id);
            },
            selectVersion(version) {
                this.setLastVersion(version);
            },
            selectUser(user) {
                this.setLastUser(user);
            },
            openCreateUserModal() {
                this.$modal.open(CreateUserForm, null, {
                    header: this.$t('modal.createUser.header'),
                });
            },
            goToUsersPage() {
                this.$router.push('users');
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

        &--left {
            justify-content: flex-start;
        }

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