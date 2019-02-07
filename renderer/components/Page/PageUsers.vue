<template>
    <div class="page">
        <app-page-header>{{ $t('users.header.title') }}</app-page-header>
        <app-page-content class="users">
            <div class="users-list">
                <div
                    class="users-list__item"
                    v-for="(user, index) in config.users"
                    :key="index"
                >
                    <span class="users-list__username">{{ user.username }}</span>
                    <span
                        class="users-list__remove-button"
                        @click="removeUser(user)"
                    >
                        <i class="fas fa-times" />
                    </span>
                </div>
            </div>
        </app-page-content>
    </div>
</template>

<script>
    import AppPageHeader from '../App/AppPageHeader';
    import AppPageContent from '../App/AppPageContent';
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'PageAccounts',
        components: {
            AppPageHeader,
            AppPageContent,
        },
        computed: {
            ...mapGetters('config', {
                config: 'config',
            }),
        },
        methods: {
            ...mapActions('config', {
                removeUser: 'removeUser',
            }),
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../../styles/style';

    .users {
        width: 100%;
    }

    .users-list {

        .flex(column, nowrap, flex-start, flex-start);
        width: 100%;

        &__item {

            .flex(row, nowrap, space-between, center);
            width: 100%;
            padding: 8px 0;
            border-bottom: 1px solid rgba(0,0,0,.1);

            &:last-child {
                border: none;
            }

        }

        &__username {
            .font(@classic__g__font, 15px, 700, #222);
        }

        &__remove-button {
            font-size: 13px;
        }

    }
</style>