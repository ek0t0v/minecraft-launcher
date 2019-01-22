<template>
    <div
        class="app-button"
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
        methods: {
            onClick() {
                this.$emit('on-click');
            },
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';

    .app-button {

        .flex(row, nowrap, center, center);
        padding: 10px 16px;
        background-color: @classic__button__background-color;
        border-radius: 3px;
        cursor: pointer;
        transition: .1s background-color ease-in-out;

        &:hover {
            background-color: lighten(@classic__button__background-color, 2%);
        }

        span {
            .font(@classic__g__font, 15px, 700, @classic__button__color);
            display: block;
        }

    }
</style>