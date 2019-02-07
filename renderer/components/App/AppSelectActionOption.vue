<template>
    <div class="app-select-action-option">
        <div class="app-select-action-option__icon">
            <i :class="cssIconClass" />
        </div>
        <div class="app-select-action-option__text">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppSelectActionOption',
        props: {
            cssIconClass: {
                type: String,
                default: 'fas fa-circle',
            },
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../../styles/style';

    .app-select-action-option {

        .flex(row, nowrap, flex-start, center);
        width: 100%;
        padding: 6px 12px;
        cursor: pointer;
        box-sizing: border-box;

        &:hover {
            background-color: @classic__version-select-option__background-color--hover;
        }

        &__icon {
            .flex(row, nowrap, center, center);
            font-size: 12px;
            width: 12px;
            height: 12px;
            margin: 0 10px 0 2px;
        }

        &__text {
            .text-clip;
            .font(@classic__g__font, 13px, 400, @classic__version-select-option__color);
        }

    }
</style>