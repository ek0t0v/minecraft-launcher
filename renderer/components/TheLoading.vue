<template>
    <div class="loading">
        <div
            class="loading__bar"
            :style="{ width: progressWithPercent }"
        />
        <div class="loading__content">
            <div class="loading__content-block loading__content-block--left">
                <span class="loading__text loading__text--step">{{ step }}</span>
            </div>
            <div class="loading__content-block loading__content-block--center">
                <span class="loading__text loading__text--progress">{{ progressWithPercent }}</span>
            </div>
            <div class="loading__content-block loading__content-block--right">
                <span class="loading__text loading__text"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'TheLoading',
        computed: {
            ...mapGetters('loading', {
                isActive: 'isActive',
                step: 'step',
                progress: 'progress',
            }),
            progressWithPercent() {
                return this.progress + '%';
            },
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';

    .loading {

        .flex(row, nowrap, center, center);
        width: 100%;
        height: @classic__loading__height;
        background-color: @classic__loading__background-color;
        overflow: hidden;
        z-index: 1;

        &__content {
            .flex(row, nowrap, space-between, center);
            width: 100%;
            padding: 0 16px;
            z-index: 1;
        }

        &__content-block {

            &--left,
            &--right {
                width: calc((100% - 32px - 16px - 16px - 48px) / 2);
            }

            &--left {
                .flex(row, nowrap, flex-start, center);
            }

            &--right {
                .flex(row, nowrap, flex-end, center);
            }

            &--center {
                .flex(row, nowrap, center, center);
                width: 48px;
            }

        }

        &__text {

            .font(@classic__g__font, 14px, 400, #fff);

            &--progress {
                font-size: 15px;
                font-weight: 700;
            }

        }

        &__bar {
            width: 0;
            height: @classic__loading__height;
            background-color: @classic__loading__progress-bar__background-color;
            transition: .1s width ease-in-out;
            position: absolute;
            left: 0;
        }

    }
</style>