<template></template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'LocaleChanger',
        computed: {
            ...mapGetters('config', {
                locale: 'locale',
            }),
        },
        watch: {
            locale(locale) {
                this.$i18n.locale = locale;
            },
        },
    }
</script>