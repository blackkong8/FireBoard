<script setup lang="ts">
import { auth } from "./accountManage"
import { onAuthStateChanged } from "firebase/auth";

import { ref, type Ref } from "vue"

const isLoggedIn: Ref<undefined | boolean> = ref(undefined);

let user;

onAuthStateChanged(auth, (e) => {
    user = e;
    if (e) {
        isLoggedIn.value = true;
    } else {
        isLoggedIn.value = false;
    }
})
</script>

<template>
    <slot v-if="isLoggedIn == undefined"></slot>
    <slot name="LoggedIn" v-else-if="isLoggedIn"></slot>
    <slot name="LoggedOut" v-else> </slot>
</template>