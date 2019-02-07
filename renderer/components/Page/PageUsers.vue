<template>
    <div class="page">
        <app-page-header>{{ $t('users.header.title') }}</app-page-header>
        <app-page-content class="users">
            <button @click="openCreateUserModal">Create user</button>
            <div
                class="users-list"
                v-for="(user, index) in config.users"
                :key="index"
            >
                <div class="users-list__item">
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
    import CreateUserForm from '../CreateUserForm';
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
            openCreateUserModal() {
                this.$modal.open(CreateUserForm, {
                    action: () => console.log('action'),
                    payload: {},
                    text: 'asasfsaf',
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    danger: true,
                }, {
                    header: 'Create user',
                });
            },
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../../styles/style';

    .users {

    }
</style>