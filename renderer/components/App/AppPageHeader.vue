<template>
    <div class="app-page-header">
        <h1 class="app-page-header__header">
            <slot />
        </h1>
    </div>
</template>

<script>
    export default {
        name: 'AppPageHeader',
    }
</script>

<style lang="less" scoped>
    @import (reference) '../../styles/style';

    .app-page-header {

        width: 100%;
        padding: 24px 24px 48px 24px;
        box-sizing: border-box;

        &__header {
            .font(@classic__g__font, 24px, 700, #222);
        }

    }
</style>