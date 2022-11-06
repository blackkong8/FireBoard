<script setup lang="ts">
import mainIcon from './icons/mainIcon.vue';

import { ref } from 'vue'
import { app } from './script/firebase_init'
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"

const auth = getAuth(app)
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