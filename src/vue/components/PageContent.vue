<template>
    <div class="page-content">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'PageContent',
    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';

    .page-content {
        /*height: 1000px;*/
        /*overflow-y: auto;*/
        padding: 4px 24px 24px 24px;
        box-sizing: border-box;
    }
</style>