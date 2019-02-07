<template>
    <form
        class="create-user-form"
        @submit.prevent="onSubmit"
    >
        <app-input
            class="create-user-form__element"
            :value="username"
            :placeholder="$t('createUserForm.field.username.placeholder')"
            @on-change="updateUsername"
        />
        <app-button @on-click="onSubmit">{{ $t('createUserForm.submit') }}</app-button>
    </form>
</template>

<script>
    import AppInput from './App/AppInput';
    import AppButton from './App/AppButton';
    import { mapActions } from 'vuex';

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
            ...mapActions('config', {
                createUser: 'createUser',
            }),
            updateUsername(username) {
                this.username = username;
            },
            onSubmit() {
                this.createUser({
                    username: this.username,
                });

                this.$modal.close();
            },
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';

    .create-user-form {

        width: 360px;

        &__element {
            margin: 0 0 24px 0;
        }

    }
</style>