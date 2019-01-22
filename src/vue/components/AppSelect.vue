<template>
    <div class="app-select">
        <label
            v-if="label"
            class="app-select__label"
        >
            {{ label }}
        </label>
        <input
            class="app-select__input"
            :class="'app-select__input--' + menuUniqueClass"
            type="text"
            readonly
            :value="current ? current.name : null"
            :placeholder="placeholder"
            @click="isMenuOpened = !isMenuOpened"
        />
        <transition :name="transitionName">
            <div
                v-show="isMenuOpened"
                class="app-select__menu"
                :class="{
                    'app-select__menu--appears-from-top': appearsFrom === 'top',
                    'app-select__menu--appears-from-bottom': appearsFrom === 'bottom',
                    'app-select__menu--appears-from-top-with-label': appearsFrom === 'top' && label,
                }"
            >
                <div
                    v-for="(choice, index) in choices"
                    :key="index"
                    class="app-select__menu-item"
                    @click="select(index)"
                >
                    {{ choice.name }}
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'AppSelect',
        props: {
            choices: {
                type: Array,
                default: () => [],
            },
            current: {
                type: Object,
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
            select(index) {
                this.$emit('on-select', this.choices[index]);
            },
        },

    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';

    .app-select {

        .flex(column, nowrap, flex-start, flex-start);
        position: relative;

        &__label {
            .font(@classic__g__font, 12px, 400, @classic__select__label__color);
            margin: 0 0 6px 0;
        }

        &__input {

            .text-clip;
            .font(@classic__g__font, 15px, 600, @classic__select__input__color);
            width: 100%;
            padding: 10px 0;
            box-sizing: border-box;
            border-bottom: 3px solid @classic__select__border__color;
            cursor: pointer;

            &::placeholder {
                color: @classic__select__placeholder__color;
                font-weight: 400;
            }

        }

        &__menu {
            width: 100%;
            padding: 6px 0;
            background-color: @classic__select__menu__background-color;
            position: absolute;
            box-shadow: 0 0 0 1px rgba(0,0,0,.025), 0 4px 16px rgba(0,0,0,.15);

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

        &__menu-item {

            .text-clip;
            .font(@classic__g__font, 13px, 400, @classic__select__input__color);
            width: 100%;
            padding: 6px 12px;
            cursor: pointer;
            box-sizing: border-box;

            &:hover {
                background-color: @classic__select__item__background-color--hover;
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