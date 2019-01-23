<template>
    <transition name="loading-transition">
        <div class="loading">
            <div class="loading__overlay" />
            <div class="loading__content">
                {{ step }}
            </div>
        </div>
    </transition>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'Loading',
        computed: {
            ...mapGetters('loading', {
                step: 'step',
            }),
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';

    .loading {

        .flex(row, nowrap, center, center);
        width: 100%;
        height: 100vh;
        overflow: hidden;
        z-index: 1000;

        &__overlay {

            width: 100%;
            height: 100%;
            position: relative;
            background-image: url('../../../resources/images/loading_background.png');
            background-size: cover;
            background-position-x: 50%;
            filter: blur(8px);
            transform: scale(1.1);

            &:after {
                content: '';
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                position: absolute;
                background-color: rgba(0,0,0,.75);
            }

        }

        &__content {
            position: absolute;
            color: #fff;
        }

    }

    .loading-transition-enter-active, .loading-transition-leave-active {
        transition: opacity 1s;
    }

    .loading-transition-enter, .loading-transition-leave-to {
        opacity: 0;
    }
</style>