<script setup lang="ts">
import BoardHeader from "./components/BoardHeader.vue"
import BoardAside from "./components/BoardAside.vue";
import BoardMain from "./components/BoardMain.vue";
</script>

<template>
    <BoardHeader />
    <hr class="full-width">
    <main>
        <BoardMain />
    </main>
    <aside>
        <BoardAside />
    </aside>
</template>

<style scoped>
.full-width {
    grid-column: 1/ -1;
    width: 100%;
}
</style>