<template>
    <div class="page">
        <app-page-header>{{ $t('settings.header.title') }}</app-page-header>
        <app-page-content class="settings">
            <app-select
                class="settings__element"
                :choices="$t('locales')"
                :current="locale"
                :label="$t('settings.element.locale.label')"
                @on-select="selectLocale"
            />
            <app-input
                class="settings__element"
                :label="$t('settings.element.versionsDirectory.label')"
                :placeholder="$t('settings.element.versionsDirectory.placeholder')"
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
    import AppPageHeader from '../components/AppPageHeader';
    import AppPageContent from '../components/AppPageContent';
    import AppSelect from '../components/AppSelect';
    import { mapGetters, mapActions } from 'vuex';
    import AppInput from '../components/AppInput';

    export default {
        name: 'PageSettings',
        components: {
            AppInput,
            AppPageHeader,
            AppPageContent,
            AppSelect,
        },
        computed: {
            ...mapGetters('config', {
                config: 'config',
            }),
            locale() {
                return this.$t('locales').filter(locale => {
                    return locale.value === this.config.locale;
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
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';

    .settings {

        &__element {

            margin: 0 0 24px 0;

            &:last-child {
                margin: 0;
            }

        }
    }
</style>