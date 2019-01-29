<template></template>

<script>
    // Компонент-хак, слушает изменения локали в сторе и меняет ее. Нужен, т.к.
    // неясно как в сторе получить доступ к $i18n.

    import { mapGetters } from 'vuex';

    export default {
        name: 'TheLocaleChanger',
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