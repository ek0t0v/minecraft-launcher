<template>
    <form
        class="create-user-form"
        @submit.prevent="onSubmit"
    >
        <app-input
            :value="username"
            @on-change="updateUsername"
        />
        <app-button @on-click="onSubmit">Create user</app-button>
    </form>
</template>

<script>
    import AppInput from './App/AppInput';
    import AppButton from './App/AppButton';
    import { mapActions } from 'vuex';
    import { createUser } from '../commands/user';

    export default {
        name: 'CreateUserForm',
        components: {
            AppButton,
            AppInput,
        },
        data() {
            return {
                username: '',
            };
        },
        methods: {
            ...mapActions('user', {
                createUser: 'createUser',
            }),
            updateUsername(username) {
                this.username = username;
            },
            onSubmit() {
                createUser({
                    username: this.username,
                });

                this.$modal.close(); // todo: Закрывать, только когда юзер сохранился.
            },
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';

    .create-user-form {
        width: 360px;
    }
</style>