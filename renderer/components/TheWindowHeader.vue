<template>
    <div class="window-header">
        <div class="window-header__button" @click="minimizeWindow">
            <i class="fas fa-minus" />
        </div>
        <div class="window-header__button" @click="closeWindow">
            <i class="fas fa-times" />
        </div>
    </div>
</template>

<script>
    const remote = require('electron').remote;

    export default {
        name: 'TheWindowHeader',
        methods: {
            minimizeWindow() {
                remote.getCurrentWindow().minimize();
            },
            closeWindow() {
                remote.getCurrentWindow().close();
            },
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../styles/style';

    .window-header {

        .flex(row, nowrap, flex-end, center);
        width: 100%;
        height: @classic__window-header__height;
        background-color: #222;
        z-index: 3;
        -webkit-app-region: drag;

        &__button {

            .flex(row, nowrap, center, center);
            width: 40px;
            height: 40px;
            color: #fff;
            font-size: 15px;
            -webkit-app-region: no-drag;
            transition: .1s background-color ease-in-out;

            &:hover {
                background-color: rgba(255,255,255,.05);
            }

        }

    }
</style>