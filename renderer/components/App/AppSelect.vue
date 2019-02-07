<template>
    <div
        class="app-select"
        :class="{ 'app-select--disabled': isDisabled }"
    >
        <label
            v-if="label"
            class="app-select__label"
        >
            {{ label }}
        </label>
        <div class="app-select__input-wrapper">
            <input
                class="app-select__input"
                :class="'app-select__input--' + menuUniqueClass"
                type="text"
                readonly
                :value="current"
                :placeholder="placeholder"
                @click="openMenu"
            />
            <transition name="fade">
                <div
                    v-if="isLoading"
                    class="app-select__loading"
                >
                    <app-spinner />
                </div>
            </transition>
        </div>
        <transition :name="transitionName">
            <div
                v-show="isMenuOpened"
                class="app-select__menu"
                :style="{ maxHeight: maxHeight + 'px' }"
                :class="{
                    'app-select__menu--appears-from-top': appearsFrom === 'top',
                    'app-select__menu--appears-from-bottom': appearsFrom === 'bottom',
                    'app-select__menu--appears-from-top-with-label': appearsFrom === 'top' && label,
                }"
            >
                <slot />
            </div>
        </transition>
    </div>
</template>

<script>
    import AppSpinner from './AppSpinner';

    export default {
        name: 'AppSelect',
        components: {
            AppSpinner,
        },
        props: {
            current: {
                type: String,
                default: null,
            },
            placeholder: {
                type: String,
                default: 'Placeholder',
            },
            label: {
                type: String,
                default: null,
            },
            appearsFrom: {
                type: String,
                default: 'top',
                validator: v => [
                    'top',
                    'bottom',
                ].indexOf(v) > -1,
            },
            maxHeight: {
                type: Number,
                default: 128,
                validator: v => v > 24 && v < 1024,
            },
            isLoading: Boolean,
            isDisabled: Boolean,
        },
        data() {
            return {
                isMenuOpened: false,
                menuUniqueClass: Math.random().toString(36).substr(2, 9),
                transitionName: this.appearsFrom === 'top' ? 'select-transition-from-top' : 'select-transition-from-bottom',
            };
        },
        mounted() {
            window.addEventListener('click', e => {
                if (e.target.closest('.app-select__input--' + this.menuUniqueClass)) {
                    return;
                }

                this.isMenuOpened = false;
            });
        },
        methods: {
            openMenu() {
                if (this.isDisabled) {
                    return;
                }

                this.isMenuOpened = !this.isMenuOpened;
            },
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../../styles/style';

    .app-select {

        .flex(column, nowrap, flex-start, flex-start);
        position: relative;

        &--disabled {

            .app-select__label,
            .app-select__input {
                opacity: .25;
            }

            .app-select__input {
                cursor: default;
            }

        }

        &__label {
            .font(@classic__g__font, 12px, 400, @classic__select__label__color);
            margin: 0 0 6px 0;
            transition: .1s opacity ease-in-out;
        }

        &__input-wrapper {
            width: 100%;
        }

        &__input {

            .noselect; // todo: Текст все равно выделяется, поправить (видимо, из-за readonly).
            .text-clip; // todo: Сделать отступ под анимацию загрузки.
            .font(@classic__g__font, 15px, 600, @classic__select__input__color);
            width: 100%;
            padding: 10px 0;
            box-sizing: border-box;
            border-bottom: 3px solid @classic__select__border__color;
            cursor: pointer;
            position: relative;
            transition: .1s opacity ease-in-out;

            &::placeholder {
                color: @classic__select__placeholder__color;
                font-weight: 400;
            }

        }

        &__loading {
            width: 20px;
            height: 20px;
            position: absolute;
            top: 9.5px;
            right: 0;
        }

        &__menu {

            width: 100%;
            padding: 6px 0;
            background-color: @classic__select__menu__background-color;
            position: absolute;
            box-shadow: 0 0 0 1px rgba(0,0,0,.025), 0 4px 16px rgba(0,0,0,.15);
            overflow-y: auto;
            z-index: 100;

            &--appears-from-top-with-label {
                top: 63px !important;
            }

            &--appears-from-top {
                top: 42px;
            }

            &--appears-from-bottom {
                bottom: 42px;
            }

        }

    }

    .select-transition-from-top-enter-active,
    .select-transition-from-top-leave-active {
        transition: all .05s ease-in-out;
    }

    .select-transition-from-top-enter, .select-transition-from-top-leave-to {
        transform-origin: top;
        transform: scale(.9) translateY(-12px) translateY(-12px);
        opacity: 0;
    }

    .select-transition-from-bottom-enter-active,
    .select-transition-from-bottom-leave-active {
        transition: all .05s ease-in-out;
    }

    .select-transition-from-bottom-enter, .select-transition-from-bottom-leave-to {
        transform-origin: top;
        transform: scale(.9) translateY(15px) translateY(15px);
        opacity: 0;
    }
</style>