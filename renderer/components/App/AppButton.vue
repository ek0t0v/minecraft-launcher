<template>
    <div
        class="app-button"
        :class="{ 'app-button--disabled': isDisabled }"
        @click="onClick"
    >
        <span>
            <slot />
        </span>
    </div>
</template>

<script>
    export default {
        name: 'AppButton',
        props: {
            isDisabled: Boolean,
        },
        methods: {
            onClick() {
                if (this.isDisabled) {
                    return;
                }

                this.$emit('on-click');
            },
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../../styles/style';

    .app-button {

        .flex(row, nowrap, center, center);
        padding: 10px 16px;
        background-color: @classic__button__background-color;
        /*border-radius: 3px;*/
        cursor: pointer;
        transition: .1s all ease-in-out;

        &--disabled {
            opacity: .25;
            cursor: default;
        }

        &:hover:not(&--disabled) {
            background-color: lighten(@classic__button__background-color, 2%);
        }

        span {
            .font(@classic__g__font, 15px, 700, @classic__button__color);
            display: block;
        }

    }
</style>