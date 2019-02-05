<template>
    <div class="app-input">
        <label
            v-if="label"
            class="app-input__label"
        >
            {{ label }}
        </label>
        <input
            type="text"
            class="app-input__input"
            :value="localValue"
            :placeholder="placeholder"
            @change="onChange"
            @blur="onBlur"
        />
    </div>
</template>

<script>
    export default {
        name: 'AppInput',
        props: {
            value: {
                type: String,
                default: '',
            },
            placeholder: {
                type: String,
                default: 'Placeholder',
            },
            label: {
                type: String,
                default: null,
            },
        },
        data() {
            return {
                localValue: this.value,
            };
        },
        methods: {
            onChange(e) {
                this.localValue = e.target.value;

                this.$emit('on-change', this.localValue);
            },
            onBlur() {
                if (this.value === this.localValue) {
                    return;
                }

                this.$emit('on-blur', this.localValue);
            },
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../../styles/style';

    .app-input {

        .flex(column, nowrap, flex-start, flex-start);
        width: 100%;

        &__label {
            .font(@classic__g__font, 12px, 400, @classic__input__label__color);
            margin: 0 0 6px 0;
        }

        &__input {

            .font(@classic__g__font, 15px, 600, @classic__input__color);
            width: 100%;
            padding: 10px 0;
            box-sizing: border-box;
            border-bottom: 3px solid @classic__input__border__color;

            &::placeholder {
                color: @classic__input__placeholder__color;
                font-weight: 400;
            }

        }

    }
</style>