<template>
    <div class="page">
        <page-header>{{ $t('about.header.title') }}</page-header>
        <page-content>
            About...
        </page-content>
    </div>
</template>

<script>
    import PageHeader from '../components/PageHeader';
    import PageContent from '../components/PageContent';

    export default {
        name: 'About',
        components: {
            PageHeader,
            PageContent,
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../less/style';
</style>