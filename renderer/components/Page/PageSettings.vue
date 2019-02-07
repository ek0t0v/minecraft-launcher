<template>
    <div class="page">
        <app-page-header>{{ $t('settings.header.title') }}</app-page-header>
        <app-page-content class="settings">
            <app-select
                class="settings__element"
                :current="currentLocale.name"
                :label="$t('settings.element.locale.label')"
            >
                <app-select-option
                    v-for="(locale, index) in $t('settings.element.locale.options')"
                    :key="index"
                    @click.native="selectLocale(locale)"
                >
                    {{ locale.name }}
                </app-select-option>
            </app-select>
            <app-select
                class="settings__element"
                :current="currentSidebarPosition.name"
                :label="$t('settings.element.sidebarPosition.label')"
            >
                <app-select-option
                    v-for="(position, index) in $t('settings.element.sidebarPosition.options')"
                    :key="index"
                    @click.native="selectSidebarPosition(position)"
                >
                    {{ position.name }}
                </app-select-option>
            </app-select>
            <app-select
                class="settings__element"
                :current="currentLoadingPosition.name"
                :label="$t('settings.element.loadingPosition.label')"
            >
                <app-select-option
                    v-for="(position, index) in $t('settings.element.loadingPosition.options')"
                    :key="index"
                    @click.native="selectLoadingPosition(position)"
                >
                    {{ position.name }}
                </app-select-option>
            </app-select>
            <app-input
                class="settings__element"
                :value="config.gameDirectory"
                :label="$t('settings.element.gameDirectory.label')"
                :placeholder="$t('settings.element.gameDirectory.placeholder')"
                @on-blur="onBlurGameDirectoryInput"
            />
            <app-input
                class="settings__element"
                :label="$t('settings.element.jvmArgs.label')"
                :placeholder="$t('settings.element.jvmArgs.placeholder')"
            />
            <app-input
                class="settings__element"
                :label="$t('settings.element.minecraftArgs.label')"
                :placeholder="$t('settings.element.minecraftArgs.placeholder')"
            />
        </app-page-content>
    </div>
</template>

<script>
    import AppPageHeader from '../App/AppPageHeader';
    import AppPageContent from '../App/AppPageContent';
    import AppSelect from '../App/AppSelect';
    import AppInput from '../App/AppInput';
    import { mapGetters, mapActions } from 'vuex';
    import AppSelectOption from '../App/AppSelectOption';

    export default {
        name: 'PageSettings',
        components: {
            AppSelectOption,
            AppInput,
            AppPageHeader,
            AppPageContent,
            AppSelect,
        },
        computed: {
            ...mapGetters('config', {
                config: 'config',
            }),
            currentLocale() {
                return this.$t('settings.element.locale.options').filter(locale => {
                    return locale.value === this.config.locale;
                })[0];
            },
            currentSidebarPosition() {
                return this.$t('settings.element.sidebarPosition.options').filter(position => {
                    return position.value === this.config.sidebarPosition;
                })[0];
            },
            currentLoadingPosition() {
                return this.$t('settings.element.loadingPosition.options').filter(position => {
                    return position.value === this.config.loadingPosition;
                })[0];
            },
        },
        methods: {
            ...mapActions('config', {
                updateConfig: 'updateConfig',
            }),
            selectLocale(payload) {
                this.updateConfig({
                    key: 'locale',
                    value: payload.value,
                });
            },
            selectSidebarPosition(payload) {
                this.updateConfig({
                    key: 'sidebarPosition',
                    value: payload.value,
                })
            },
            selectLoadingPosition(payload) {
                this.updateConfig({
                    key: 'loadingPosition',
                    value: payload.value,
                })
            },
            onBlurGameDirectoryInput(directory) {
                this.updateConfig({
                    key: 'gameDirectory',
                    value: directory,
                });
            },
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../../styles/style';

    .settings {

        &__element {

            margin: 0 0 24px 0;

            &:last-child {
                margin: 0;
            }

        }
    }
</style>