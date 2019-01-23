<template>
    <div class="page">
        <page-header>{{ $t('settings.header.title') }}</page-header>
        <page-content class="settings">
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
        </page-content>
    </div>
</template>

<script>
    import PageHeader from '../components/PageHeader';
    import PageContent from '../components/PageContent';
    import AppSelect from '../components/AppSelect';
    import { mapGetters, mapActions } from 'vuex';
    import AppInput from '../components/AppInput';

    export default {
        name: 'Settings',
        components: {
            AppInput,
            PageHeader,
            PageContent,
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