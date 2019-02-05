<template>
    <transition name="modal">
        <div
            v-show="this.$modal.isVisible"
            class="modal-mask"
        >
            <div
                class="modal-wrapper"
                @click.self.prevent="onClickOutside"
            >
                <transition name="fade">
                    <div
                        v-show="this.$modal.isVisible"
                        class="modal"
                    >
                        <div class="modal__header">
                            <h1>{{ this.$modal.config.header }}</h1>
                        </div>
                        <div class="modal__content">
                            <current-modal-component />
                        </div>
                        <div
                            v-if="this.$modal.config.closeButton"
                            class="modal__close"
                            @click="onClickCloseButton"
                        >
                            <i class="fas fa-times" />
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </transition>
</template>

<script>
    import Vue from 'vue';

    Vue.component('current-modal-component', {
        render(h) {
            return h(this.$modal.component, {
                props: this.$modal.props,
            });
        },
    });

    export default {
        name: 'TheModal',
        methods: {
            onClickOutside() {
                if (!this.$modal.config.closeOnClickOutside) {
                    return;
                }

                this.$modal.close();
            },
            onClickCloseButton() {
                if (!this.$modal.config.closeButton) {
                    return;
                }

                this.$modal.close();
            },
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';

    .modal-mask {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: @classic__modal__mask__background-color;
        display: table;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal {

        width: fit-content;
        margin: 0 auto;
        display: table;
        box-shadow: @classic__modal__modal__box-shadow;
        position: relative;
        background-color: #fff;

        &__header {

            width: 100%;
            padding: 32px;
            box-sizing: border-box;

            h1 {
                .text-clip;
                .font(@classic__g__font, 20px, 700, @classic__modal__header__color);
                padding: unset;
            }

        }

        &__content {
            padding: 0 32px 32px 32px;
        }

        &__close {

            .flex(row, nowrap, center, center);
            color: #fff;
            width: 32px;
            height: 32px;
            position: absolute;
            top: -8px;
            right: -32px;
            opacity: .5;
            cursor: pointer;
            transition: .1s opacity ease-in-out;

            &:hover {
                opacity: .75;
            }

            i {
                font-size: 16px;
                color: inherit;
            }

        }

    }

    .modal-enter-active, .modal-leave-active {
        transition: all .1s ease-in-out;
    }

    .modal-enter,
    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .1s ease-in-out;
    }

    .fade-enter-active {
        animation: bounce-in .1s;
    }

    .fade-enter, .fade-leave-to {
        transform-origin: top;
        transform: scale(.9) translateY(-12px) translateY(-12px);
        opacity: 0;
    }

    @keyframes bounce-in {
        90% {
            transform: scale(1.01) translateY(-12px);
        }
        100% {
            transform: scale(1) translateY(-12px);
        }
    }
</style>