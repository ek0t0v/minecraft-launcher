<template>
    <div class="page-header">
        <div class="page-header-breadcrumbs">
            <router-link
                class="page-header-breadcrumbs__item"
                to="home"
            >
                <i class="sidebar-menu__icon fas fa-home" />
            </router-link>
            <div class="page-header-breadcrumbs__item">
                <i class="fas fa-arrow-right" />
            </div>
            <span class="page-header-breadcrumbs__item">
                <slot />
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageHeader',
    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';

    .page-header {
        width: 100%;
        padding: 24px;
        box-sizing: border-box;
    }

    .page-header-breadcrumbs {

        .flex(row, nowrap, flex-start, center);

        &__item {

            color: #222;
            font-size: 20px;
            font-weight: 700;
            margin: 0 12px 0 0;

            &:last-child {
                margin: 0;
            }

        }

    }
</style>