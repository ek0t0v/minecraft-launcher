<template>
    <div
        class="button"
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
    @import (reference) '../less/style';

    .button {

        .flex(row, nowrap, center, center);
        padding: 10px 16px;
        background-color: #23CFA6;
        border-radius: 3px;

        span {
            font-size: 15px;
            font-weight: 700;
            color: #fff;
            display: block;
        }

    }
</style>