<template>
    <div class="app-select-option">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'AppSelectOption',
    }
</script>

<style lang="less" scoped>
    @import (reference) '../../styles/style';

    .app-select-option {

        .text-clip;
        .font(@classic__g__font, 13px, 400, @classic__select-option__color);
        width: 100%;
        padding: 6px 12px;
        cursor: pointer;
        box-sizing: border-box;

        &:hover {
            background-color: @classic__select-option__background-color--hover;
        }

    }
</style>