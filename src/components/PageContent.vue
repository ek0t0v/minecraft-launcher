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
    @import (reference) '../less/style';

    .page-content {
        padding: 0 24px 24px 24px;
        box-sizing: border-box;
    }
</style>