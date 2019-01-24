<template>
    <div class="page">
        <app-page-header>{{ $t('accounts.header.title') }}</app-page-header>
        <app-page-content>Accounts...</app-page-content>
    </div>
</template>

<script>
    import AppPageHeader from '../App/AppPageHeader';
    import AppPageContent from '../App/AppPageContent';

    export default {
        name: 'PageAccounts',
        components: {
            AppPageHeader,
            AppPageContent,
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../../styles/style';
</style>