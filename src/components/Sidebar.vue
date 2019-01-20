<template>
    <div class="sidebar">
        <app-button @on-click="run">
            Run Minecraft
        </app-button>
    </div>
</template>

<script>
    import AppButton from '../components/AppButton';
    import { execute } from '../modules/command';

    export default {
        name: 'Sidebar',
        components: {
            AppButton,
        },
        methods: {
            run() {
                execute('java -jar ~/.minecraft/versions/a1.2.6/a1.2.6.jar', output => {
                    alert(output);
                });
            },
        },
    }
</script>

<style lang="less" scoped>
    @import (reference) '../less/style';

    .sidebar {
        width: 240px;
        height: 100vh;
        padding: 24px;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        right: 0;
        background-color: #E8F7F4;
    }
</style>