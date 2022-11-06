<script setup lang="ts">
import isLoggedIn from './account/isLoggedIn.vue';
import { LogIn, LogOut } from './account/accountManage';
</script>

<template style="display:none">
    <!--
        <icon />
        <title />
        <search />
        <login />
        <user />
    -->
    <!--
    <h1>FireBoard</h1>
    <a v-if="isLoggedIn" @click="LogOut">
        Log Out
    </a>
    <a v-else @click="LogIn">
        Log In
    </a>
    -->
    <header>
        <h1>FireBoard</h1>
        <isLoggedIn>
            <template #LoggedIn>
                <p @click="LogOut">LogOut</p>
            </template>
            <template #LoggedOut>
                <p @click="LogIn.google">LogIn</p>
            </template>
            <template #default>
                <p>...</p>
            </template>
        </isLoggedIn>
    </header>
</template>

<style scoped>
header {
    grid-column: 1/-1;

    display: flex;
    align-items: center;
    flex-direction: row;
}

h1 {
    margin-right: auto;
}
</style>