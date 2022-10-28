<script lang="ts">
import { UpdateAccount, auth } from './script/accountManage';
import { onAuthStateChanged } from "firebase/auth"

export default {
    data() {
        return {
            show: true
        };
    },
    methods: {
        handleClick() {
            UpdateAccount()
        },
    }
}

</script>

<template>
    <h1>FireBoard</h1>
    <a @click="handleClick">
        <p v-if="show">Log In</p>
        <p v-else="show">Log Out</p>
    </a>
</template>

<style scoped>
h1 {
    margin-right: auto;
}

a {
    margin: 0 5px;
    padding: 5px;
}
</style>