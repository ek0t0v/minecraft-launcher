<template>
    <div class="app-page-content">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'AppPageContent',
    }
</script>

<style lang="less" scoped>
    @import (reference) '../../styles/style';

    .app-page-content {
        /*height: 1000px;*/
        /*overflow-y: auto;*/
        padding: 4px 24px 24px 24px;
        box-sizing: border-box;
    }
</style>