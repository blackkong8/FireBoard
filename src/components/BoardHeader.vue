<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { UpdateAccount, auth, userInfo } from './script/accountManage';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const isLoggedIn = ref(true)

onAuthStateChanged(auth, (user) => {
    if (user) {
        isLoggedIn.value = true
    } else {
        isLoggedIn.value = false
    }
})

const LogOut = () => {
    auth.signOut()
}

const LogIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
}

</script>

<template>
    <h1>FireBoard</h1>
    <a v-if="isLoggedIn" @click="LogOut">
        Log Out
    </a>
    <a v-else @click="LogIn">
        Log In
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