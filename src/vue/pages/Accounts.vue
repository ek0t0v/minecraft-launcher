<template>
    <div class="page">
        <page-header>{{ $t('accounts.header.title') }}</page-header>
        <page-content>
            Accounts...
        </page-content>
    </div>
</template>

<script>
    import PageHeader from '../components/PageHeader';
    import PageContent from '../components/PageContent';

    export default {
        name: 'Accounts',
        components: {
            PageHeader,
            PageContent,
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';
</style>