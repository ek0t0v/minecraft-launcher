<template>
    <div class="page">
        <page-header>{{ $t('settings.header.title') }}</page-header>
        <page-content>
            <app-select
                :choices="locales"
                :current="currentLocale"
                @on-select="selectLocale"
            />
        </page-content>
    </div>
</template>

<script>
    import PageHeader from '../components/PageHeader';
    import PageContent from '../components/PageContent';
    import AppSelect from '../components/AppSelect';
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'Settings',
        components: {
            PageHeader,
            PageContent,
            AppSelect,
        },
        data() {
            return {
                locales: [
                    {
                        name: 'English',
                        value: 'en',
                    },
                    {
                        name: 'Русский',
                        value: 'ru',
                    },
                ],
            };
        },
        computed: {
            ...mapGetters('config', {
                locale: 'locale',
            }),
            currentLocale() {
                return this.locales.filter(locale => {
                    return locale.value === this.locale;
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
                this.$i18n.locale = payload.value;
            },
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../less/style';
</style>