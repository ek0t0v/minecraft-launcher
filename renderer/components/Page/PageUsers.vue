<template>
    <div class="page">
        <app-page-header>{{ $t('users.header.title') }}</app-page-header>
        <app-page-content class="users">
            <button @click="openCreateUserModal">Create user</button>
            <div
                v-for="(user, index) in users"
                :key="index"
            >
                {{ user.username }}
            </div>
        </app-page-content>
    </div>
</template>

<script>
    import AppPageHeader from '../App/AppPageHeader';
    import AppPageContent from '../App/AppPageContent';
    import CreateUserForm from '../CreateUserForm';
    import { mapGetters } from 'vuex';

    export default {
        name: 'PageAccounts',
        components: {
            AppPageHeader,
            AppPageContent,
        },
        computed: {
            ...mapGetters('user', {
                users: 'items',
            }),
        },
        methods: {
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