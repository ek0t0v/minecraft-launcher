<template>
    <div class="version-select-option">
        <div
            class="version-select-option__installed-mark"
            :class="{ 'version-select-option__installed-mark--installed': isInstalled }"
        />
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'VersionSelectOption',
        props: {
            isInstalled: Boolean,
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';

    .version-select-option {

        .flex(row, nowrap, flex-start, center);
        .text-clip;
        .font(@classic__g__font, 13px, 400, @classic__version-select-option__color);
        width: 100%;
        padding: 6px 12px;
        cursor: pointer;
        box-sizing: border-box;

        &:hover {
            background-color: @classic__version-select-option__background-color--hover;
        }

        &__installed-mark {

            width: 8px;
            height: 8px;
            margin: 0 12px 0 4px;
            background-color: @classic__version-select-option__mark;
            border-radius: 4px;

            &--installed {
                background-color: @classic__version-select-option__mark--installed;
            }

        }
    }
</style>