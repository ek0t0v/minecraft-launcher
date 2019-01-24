<template>
    <div class="spinner">
        <div class="spinner__wheel" />
    </div>
</template>

<script>
    export default {
        name: 'AppSpinner',
    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';

    .spinner {

        width: calc(100% - 4px);
        height: calc(100% - 4px);
        text-align: center;

        &__wheel {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            border: 2px solid @classic__spinner__color;
            border-radius: 50%;
            border-left-color: transparent;
            border-right-color: transparent;
            animation: spin 425ms infinite linear;
        }

    }

    @keyframes spin {

        100% {
            transform: rotate(360deg);
        }

    }
</style>