<template>
    <div class="app-select-option-delimiter" />
</template>

<script>
    export default {
        name: 'AppSelectOptionDelimiter',
    }
</script>

<style lang="less" scoped>
    @import (reference) '../../styles/style';

    .app-select-option-delimiter {
        width: 100%;
        height: 1px;
        margin: 6px 0;
        background-color: @classic__select__delimiter__background-color;
    }
</style>