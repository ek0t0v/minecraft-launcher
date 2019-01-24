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
                :choices="choices"
                :current="currentVersion"
                :appears-from="'bottom'"
                :placeholder="$t('play.version.placeholder')"
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
            choices() {
                return [
                    {
                        name: 'Lotmine',
                        value: '0',
                    },
                    {
                        name: 'ForsCraft МиниИгры 1.8-1.12.2',
                        value: '1',
                    },
                    {
                        name: 'MineLegacy 1.8-1.13.2 Survival',
                        value: '2',
                    },
                    {
                        name: 'NexusCraft 1.8-1.13.2',
                        value: '3',
                    },
                    {
                        name: 'LuckyWorld PVP 1.8-1.12.2',
                        value: '4',
                    },
                    {
                        name: 'BattleCraft 1.12.2',
                        value: '5',
                    },
                    {
                        name: 'SuperMine NoDupe 1.8-1.12.2',
                        value: '6',
                    },
                    {
                        name: 'MineBars - NoDupe-PvP-Games',
                        value: '7',
                    },
                    {
                        name: 'McSkill.ru - МНОГО МОДОВ',
                        value: '8',
                    },
                ];
            },
        },
        created() {
            loadVersions();
        },
        methods: {
            play() {},
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